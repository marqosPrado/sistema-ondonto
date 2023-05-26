import React, { useState } from 'react';

const AddPatientModal = ({ showModal, closeModal, addPatient }) => {
  const [newPatient, setNewPatient] = useState({
    name: '',
    phone: '',
    email: '',
    prontuario: null
  });

  const handleInputChange = (event) => {
    setNewPatient({ ...newPatient, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setNewPatient({ ...newPatient, prontuario: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPatient(newPatient);
    setNewPatient({
      name: '',
      phone: '',
      email: '',
      prontuario: null
    });
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'd-block' : 'd-none'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Adicionar Paciente</h5>
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
                  value={newPatient.name}
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
                  value={newPatient.phone}
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
                  value={newPatient.email}
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
                Adicionar
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

export default AddPatientModal;
