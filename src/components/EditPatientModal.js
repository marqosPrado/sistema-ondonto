import React, { useState, useEffect } from 'react';

const EditPatientModal = ({ showModal, closeModal, patient, editPatient }) => {
  const [editedPatient, setEditedPatient] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    setEditedPatient(patient);
  }, [patient]);

  const handleInputChange = (event) => {
    setEditedPatient({ ...editedPatient, [event.target.name]: event.target.value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = `http://127.0.0.1:8080/listar-paciente/editar/${patient.id}`;

      const data = { ...editedPatient };

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        editPatient(editedPatient);
        closeModal();
      } else {
        console.error('Erro ao editar paciente:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao editar paciente:', error);
    }
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
