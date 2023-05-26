import React, {useState} from 'react';
import AddProductModal from "../components/AddProductModal";
import AddMovementModal from "../components/AddMovementModal";
import Header from "../components/Header";

const StockControl = () => {
  const [products, setProducts] = useState([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddMovementModal, setShowAddMovementModal] = useState(false);

  const openAddProductModal = () => {
    setShowAddProductModal(true);
  };

  const closeAddProductModal = () => {
    setShowAddProductModal(false);
  };

  const openAddMovementModal = () => {
    setShowAddMovementModal(true);
  };

  const closeAddMovementModal = () => {
    setShowAddMovementModal(false);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addMovement = (movement) => {
    const updatedProducts = products.map((product) => {
      if (product.id === movement.productId) {
        if (movement.type === 'entrada') {
          product.quantity += movement.quantity;
        } else if (movement.type === 'saida') {
          product.quantity -= movement.quantity;
        }
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <>
      <Header/>
      <div className={"container"}>
        <h1>Controle de Estoque</h1>

        <button className="btn btn-primary" onClick={openAddProductModal}>
          Adicionar Produto
        </button>

        <table className="table mt-4">
          <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Fornecedor</th>
            <th>Tipo</th>
            <th>Saldo</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.code}</td>
              <td>{product.description}</td>
              <td>{product.supplier}</td>
              <td>{product.type}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
          </tbody>
        </table>

        <AddProductModal
          showModal={showAddProductModal}
          closeModal={closeAddProductModal}
          addProduct={addProduct}
        />
        <AddMovementModal
          showModal={showAddMovementModal}
          closeModal={closeAddMovementModal}
          products={products}
          addMovement={addMovement}
        />
      </div>
    </>
  );
};

export default StockControl;
