import React, { useState } from 'react';

const AddMovementModal = ({ showModal, closeModal, products, addMovement }) => {
  const [movement, setMovement] = useState({
    productId: '',
    date: '',
    quantity: '',
    type: ''
  });

  const handleInputChange = (event) => {
    setMovement({ ...movement, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovement(movement);
    setMovement({
      productId: '',
      date: '',
      quantity: '',
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
              <h5 className="modal-title">Adicionar Movimentação</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Produto:</label>
                <select
                  className="form-control"
                  name="productId"
                  value={movement.productId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um produto</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.description}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Data:</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={movement.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Quantidade:</label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  value={movement.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tipo:</label>
                <select
                  className="form-control"
                  name="type"
                  value={movement.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione o tipo de movimentação</option>
                  <option value="entrada">Entrada</option>
                  <option value="saida">Saída</option>
                </select>
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

export default AddMovementModal;
