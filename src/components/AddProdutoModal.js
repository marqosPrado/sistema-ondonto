import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddProdutoModal({ showModal, closeModal, addProduto }) {
    const [produto, setProduto] = useState({
        codProduct: "",
        descProduct: "",
        fornecedor: "",
        quantProduct: 0,
        typeProduct: "",
    });

    const handleInputChange = (event) => {
        setProduto({ ...produto, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8080/cadastrar-estoque", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(produto),
            });
            if (response.ok) {
                closeModal();
                addProduto(produto);
            } else {
                console.error("Erro ao adicionar produto");
            }
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Código do Produto:</Form.Label>
                        <Form.Control
                            type="text"
                            name="codProduct"
                            value={produto.codProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descrição:</Form.Label>
                        <Form.Control
                            type="text"
                            name="descProduct"
                            value={produto.descProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fornecedor:</Form.Label>
                        <Form.Control
                            type="text"
                            name="fornecedor"
                            value={produto.fornecedor}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantProduct"
                            value={produto.quantProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo:</Form.Label>
                        <Form.Control
                            type="text"
                            name="typeProduct"
                            value={produto.typeProduct}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Adicionar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddProdutoModal;
