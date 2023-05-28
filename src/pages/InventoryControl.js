import React, { useState } from 'react';
import * as PropTypes from "prop-types";
import Header from "../components/Header";

function ProductDetailModal(props) {
  return null;
}

ProductDetailModal.propTypes = {
  product: PropTypes.any,
  closeModal: PropTypes.func,
  showModal: PropTypes.bool
};

function MovementModal(props) {
  return null;
}

MovementModal.propTypes = {
  product: PropTypes.any,
  closeModal: PropTypes.func,
  showModal: PropTypes.bool,
  addMovement: PropTypes.func
};
const InventoryControl = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const [showMovementModal, setShowMovementModal] = useState(false);

  const openProductDetailModal = (product) => {
    setSelectedProduct(product);
    setShowProductDetailModal(true);
  };

  const closeProductDetailModal = () => {
    setSelectedProduct(null);
    setShowProductDetailModal(false);
  };

  const openMovementModal = (product) => {
    setSelectedProduct(product);
    setShowMovementModal(true);
  };

  const closeMovementModal = () => {
    setSelectedProduct(null);
    setShowMovementModal(false);
  };

  const addMovement = (movement) => {
    // Implement your logic to add the movement to the product
    // and update the products state
  };

  return (
    <div className={"container"}>
      <Header />
      <h1>Controle de Estoque</h1>

      <table className="table mt-4">
        <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
          <th>Fornecedor</th>
          <th>Tipo</th>
          <th>Saldo</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.code}</td>
            <td>{product.description}</td>
            <td>{product.supplier}</td>
            <td>{product.type}</td>
            <td>{product.balance}</td>
            <td>
              <button className="btn btn-primary" onClick={() => openProductDetailModal(product)}>
                Detalhes
              </button>
              <button className="btn btn-success" onClick={() => openMovementModal(product)}>
                Adicionar Movimentação
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

      <ProductDetailModal
        showModal={showProductDetailModal}
        closeModal={closeProductDetailModal}
        product={selectedProduct}
      />

      <MovementModal
        showModal={showMovementModal}
        closeModal={closeMovementModal}
        product={selectedProduct}
        addMovement={addMovement}
      />
    </div>
  );
};

export default InventoryControl;
