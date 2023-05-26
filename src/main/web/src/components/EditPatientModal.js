import React, { useState, useEffect } from 'react';

const EditPatientModal = ({ showModal, closeModal, patient, editPatient }) => {
  const [editedPatient, setEditedPatient] = useState({
    name: '',
    phone: '',
    email: '',
    prontuario: null
  });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setEditedPatient(patient);
  }, [patient]);

  const handleInputChange = (event) => {
    setEditedPatient({ ...editedPatient, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para lidar com o envio do arquivo
    // Por exemplo, você pode fazer uma requisição para enviar o arquivo para um servidor
    // e obter o URL ou caminho do arquivo para salvar no prontuário do paciente

    // Exemplo de como atualizar o prontuário do paciente com o URL do arquivo
    const updatedPatient = { ...editedPatient };
    if (selectedFile) {
      updatedPatient.prontuario = selectedFile;
    }
    editPatient(updatedPatient);
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'd-block' : 'd-none'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Editar Paciente</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Nome do Paciente:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={editedPatient.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefone:</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={editedPatient.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={editedPatient.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Prontuário (PDF):</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="prontuario"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPatientModal;
