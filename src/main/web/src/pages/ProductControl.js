import React, { useState } from 'react';
import ProductModal from "../components/ProductModal";
import Header from "../components/Header";

const ProductControl = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (editedProduct) => {
    const updatedProducts = products.map((product) => {
      if (product.id === editedProduct.id) {
        return editedProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
    closeModal();
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className={"container"}>
      <Header />
      <h1>Controle de Produtos</h1>

      <button className="btn btn-primary" onClick={openModal}>
        Adicionar Produto
      </button>

      <table className="table mt-4">
        <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
          <th>Fornecedor</th>
          <th>Tipo</th>
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
            <td>
              <button className="btn btn-primary" onClick={() => openModal(product)}>
                Editar
              </button>
              <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

      <ProductModal
        showModal={showModal}
        closeModal={closeModal}
        product={selectedProduct}
        addProduct={addProduct}
        editProduct={editProduct}
      />
    </div>
  );
};

export default ProductControl;
