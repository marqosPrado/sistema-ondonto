import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditProdutoModal({ showModal, closeModal, produto, editProduto }) {
    const [editedProduto, setEditedProduto] = useState({
        codProduct: "",
        descProduct: "",
        fornecedor: "",
        quantProduct: 0,
        typeProduct: "",
    });

    useEffect(() => {
        setEditedProduto(produto);
    }, [produto]);

    const handleInputChange = (event) => {
        setEditedProduto({ ...editedProduto, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `http://127.0.0.1:8080/listar-estoque/editar/${produto.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(editedProduto),
                }
            );
            if (response.ok) {
                closeModal();
                editProduto(editedProduto);
            } else {
                console.error("Erro ao editar produto");
            }
        } catch (error) {
            console.error("Erro ao editar produto:", error);
        }
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Código do Produto:</Form.Label>
                        <Form.Control
                            type="text"
                            name="codProduct"
                            value={editedProduto.codProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control
                            type="text"
                            name="descProduct"
                            value={editedProduto.descProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fornecedor:</Form.Label>
                        <Form.Control
                            type="text"
                            name="fornecedor"
                            value={editedProduto.fornecedor}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantProduct"
                            value={editedProduto.quantProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Control
                            type="text"
                            name="typeProduct"
                            value={editedProduto.typeProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EditProdutoModal;
