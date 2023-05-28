import React, { useState, useEffect } from 'react';

const ProductModal = ({ showModal, closeModal, product, addProduct, editProduct }) => {
  const [editedProduct, setEditedProduct] = useState({
    id: '',
    code: '',
    description: '',
    supplier: '',
    type: ''
  });

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    } else {
      setEditedProduct({
        id: '',
        code: '',
        description: '',
        supplier: '',
        type: ''
      });
    }
  }, [product]);

  const handleInputChange = (event) => {
    setEditedProduct({ ...editedProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editedProduct.id) {
      editProduct(editedProduct);
    } else {
      const newProduct = { ...editedProduct, id: Date.now().toString() };
      addProduct(newProduct);
    }
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'd-block' : 'd-none'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">{product ? 'Editar Produto' : 'Adicionar Produto'}</h5>
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
                  value={editedProduct.code}
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
                  value={editedProduct.description}
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
                  value={editedProduct.supplier}
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
                  value={editedProduct.type}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                {product ? 'Salvar Alterações' : 'Adicionar'}
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

export default ProductModal;
