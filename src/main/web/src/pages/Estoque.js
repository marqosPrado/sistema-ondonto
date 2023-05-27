import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddProdutoModal from "../components/AddProdutoModal";
import EditProdutoModal from "../components/EditProdutoModal";
import ProdutoTable from "../components/PodutoTable";

function Estoque() {
    const [produtos, setProdutos] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedProduto, setSelectedProduto] = useState(null);

    useEffect(() => {
        fetchProdutos();
    }, []);

    const fetchProdutos = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8080/listar-estoque");
            const data = await response.json();
            setProdutos(data);
        } catch (error) {
            console.error("Erro ao buscar os produtos:", error);
        }
    };

    const openAddModal = () => {
        setShowAddModal(true);
    };

    const closeAddModal = () => {
        setShowAddModal(false);
    };

    const openEditModal = (produto) => {
        setSelectedProduto(produto);
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const addProduto = (newProduto) => {
        setProdutos([...produtos, newProduto]);
    };

    const editProduto = (updatedProduto) => {
        const updatedProdutos = produtos.map((produto) =>
            produto.id === updatedProduto.id ? updatedProduto : produto
        );
        setProdutos(updatedProdutos);
        setSelectedProduto(null);
    };

    const deleteProduto = async (id) => {
        try {
            await fetch(`http://127.0.0.1:8080/listar-estoque/deletar/${id}`, {
                method: "GET",
            });
            const updatedProdutos = produtos.filter((produto) => produto.id !== id);
            setProdutos(updatedProdutos);
        } catch (error) {
            console.error("Erro ao deletar o produto:", error);
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <h1>Controle de Estoque</h1>

                <button className="btn btn-primary" onClick={openAddModal}>
                    Adicionar Produto
                </button>

                <ProdutoTable
                    produtos={produtos}
                    openEditModal={openEditModal}
                    onDelete={deleteProduto}
                />

                <AddProdutoModal showModal={showAddModal} closeModal={closeAddModal} addProduto={addProduto} />

                {selectedProduto && (
                    <EditProdutoModal
                        showModal={showEditModal}
                        closeModal={closeEditModal}
                        produto={selectedProduto}
                        editProduto={editProduto}
                    />
                )}
            </div>
        </>
    );
}

export default Estoque;
