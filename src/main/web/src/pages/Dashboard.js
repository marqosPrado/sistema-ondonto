import Header from "../components/Header";
import {useEffect, useState} from "react";

function Dashboard() {
    try {
        document.getElementById("modalLogin").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
    } catch (e) {
        console.log(e)
    }

    const [patientCount, setPatientCount] = useState(0);
    const [lowStockItems, setLowStockItems] = useState([]);

    useEffect(() => {
        fetchPatientCount();
        fetchLowStockItems();
    }, []);

    const fetchPatientCount = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/contar-pacientes');
            const data = await response.json();
            setPatientCount(data.count);
        } catch (error) {
            console.error('Erro ao buscar o número de pacientes:', error);
        }
    };

    const fetchLowStockItems = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/itens-baixo-estoque');
            const data = await response.json();
            setLowStockItems(data);
        } catch (error) {
            console.error('Erro ao buscar os itens com baixo estoque:', error);
        }
    };

    return (<>
            <Header/>
            <div className={"container row gap-5 mx-auto"}>
                <div className={"col-md p-3 bg-body-secondary rounded"}>
                    <h2>Número de Pacientes:</h2>
                    <hr/>
                    <div className={'fs-1 text-center'}>{patientCount}</div>
                </div>

                <div className={"col-md p-3 bg-body-secondary rounded"}>
                    <h2>Itens com Baixo Estoque:</h2>
                    <hr/>
                    <table>
                        <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                        </tr>
                        </thead>
                        <tbody>
                        {lowStockItems.map((item) => (<tr key={item.id}>
                                <td>{item.descricao}</td>
                                <td>{item.quantidade}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>)
}

export default Dashboard;