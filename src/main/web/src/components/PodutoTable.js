import React from "react";
import { Table, Button } from "react-bootstrap";

function ProdutoTable({ produtos, openEditModal }) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Fornecedor</th>
                <th>Quantidade</th>
                <th>Tipo</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            {produtos.map((produto) => (
                <tr key={produto.id}>
                    <td>{produto.codProduct}</td>
                    <td>{produto.descProduct}</td>
                    <td>{produto.fornecedor}</td>
                    <td>{produto.quantProduct}</td>
                    <td>{produto.typeProduct}</td>
                    <td>
                        <Button variant="primary" onClick={() => openEditModal(produto)}>
                            Editar
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default ProdutoTable;
