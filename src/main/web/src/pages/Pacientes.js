import Header from "../components/Header";
import {useEffect, useState} from "react";
import AddPatientModal from "../components/AddPatientModal";
import EditPatientModal from "../components/EditPatientModal";

function Pacientes() {
  const [patients, setPatients] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []); // o segundo parâmetro [] faz com que o useEffect seja executado apenas uma vez, após a montagem do componente

  const fetchPatients = async () => {
    try {
      const response = await fetch('https://sistema-odonto.azurewebsites.net/listar-paciente');
      const data = await response.json();
      setPatients(data); // atualiza o estado com os produtos recebidos do servidor
    } catch (error) {
      console.error('Erro ao buscar os pacientes:', error);
    }
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openEditModal = (patient) => {
    setSelectedPatient(patient);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const editPatient = (updatedPatient) => {
    const updatedPatients = patients.map((patient) =>
      patient === selectedPatient ? updatedPatient : patient
    );
    setPatients(updatedPatients);
    setSelectedPatient(null);
  };

  const deletePatient = (patient) => {
    const updatedPatients = patients.filter((p) => p !== patient);
    setPatients(updatedPatients);
  };


  return (
    <>
    <Header />
    <div className={"container"}>
      <h1>Controle de Pacientes</h1>

      <button className="btn btn-primary" onClick={openAddModal}>
        Adicionar Paciente
      </button>

      <table className="table mt-4">
        <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Prontuário</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            <td>{patient.nome}</td>
            <td>{patient.phone}</td>
            <td>{patient.email}</td>
            <td>
              {patient.prontuario ? (
                <a href={patient.prontuario} target="_blank" rel="noopener noreferrer">
                  Visualizar Prontuário
                </a>
              ) : (
                'Nenhum prontuário anexado'
              )}
            </td>
            <td>
              <button className="btn btn-primary" onClick={() => openEditModal(patient)}>
                Editar
              </button>
              <button className="btn btn-danger ml-2" onClick={() => deletePatient(patient)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

      <AddPatientModal showModal={showAddModal} closeModal={closeAddModal} addPatient={addPatient} />
      {selectedPatient && (
        <EditPatientModal
          showModal={showEditModal}
          closeModal={closeEditModal}
          patient={selectedPatient}
          editPatient={editPatient}
        />
      )}
    </div>
    </>
  );
}

export default Pacientes;