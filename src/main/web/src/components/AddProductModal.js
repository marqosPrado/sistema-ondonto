import React, { useState } from 'react';

const AddProductModal = ({ showModal, closeModal, addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    code: '',
    description: '',
    supplier: '',
    type: ''
  });

  const handleInputChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(newProduct);
    setNewProduct({
      code: '',
      description: '',
      supplier: '',
      type: ''
    });
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'd-block' : 'd-none'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Adicionar Produto</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Código:</label>
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  value={newProduct.code}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Descrição:</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Fornecedor:</label>
                <input
                  type="text"
                  className="form-control"
                  name="supplier"
                  value={newProduct.supplier}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tipo:</label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  value={newProduct.type}
                  onChange={handleInputChange}
                  required
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

export default AddProductModal;
