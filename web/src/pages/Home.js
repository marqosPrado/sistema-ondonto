import logo from "../img/dente.png";
import banner from "../img/banner.jpg";
import agenda from "../img/agenda.png";
import estoque from "../img/estoque.png";
import pacientes from "../img/pacientes.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <div
                className="modal fade"
                id="modalLogin"
                tabIndex="-1"
                aria-labelledby="modalLoginTitulo"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLoginTitulo">
                                Entre na sua conta
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label"
                                    >Senha</label
                                    >
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <Link to={"/dashboard"} className={"btn btn-primary"}>
                                    Entrar
                                </Link>
                                <p className="form-text mb-0">
                                    Esqueceu a senha? <a href="/#">Clique aqui</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <header
                    className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
                >
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                    >
                        <img className="bi me-2" width="40" src={logo} alt="Logo"/>
                        <span className="fs-4">Takeshi Odonto Clinics</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item btn btn-primary">
                            <a
                                href="#"
                                className="text-decoration-none text-reset"
                                data-bs-toggle="modal"
                                data-bs-target="#modalLogin"
                            >
                                Entrar
                            </a>
                        </li>
                    </ul>
                </header>
            </div>
            <div className="container">
                <section className="banner py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="mb-4">
                                    Sistema de Gerenciamento para Clínicas Odontológicas
                                </h1>
                                <p className="mb-4">
                                    Otimize a gestão da sua clínica odontológica com o nosso sistema
                                    completo e fácil de usar. Controle de estoque, gerenciamento de
                                    pacientes, agenda e muito mais.
                                </p>
                                <a href="/#agenda" className="btn btn-primary me-3"
                                >Agende uma demonstração</a
                                >
                                <a href="/#estoque" className="btn btn-outline-primary">Saiba mais</a>
                            </div>
                            <div className="col-md-6">
                                <img src={banner} alt="Banner" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="agenda py-5" id="agenda">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src={agenda} alt="Agenda" className="img-fluid"/>
                            </div>
                            <div className="col-md-6">
                                <h2 className="mb-4">Agenda</h2>
                                <p className="mb-4">
                                    Com a nossa agenda para clínicas odontológicas, você pode
                                    agendar consultas, procedimentos e tratamentosde forma fácil e
                                    organizada. O sistema permite que você visualize as suas agendas
                                    diárias, semanais e mensais, além de poder verificar as
                                    disponibilidades de horários e profissionais.
                                </p>
                                {/*<a href="#" className="btn btn-primary">Agende uma demonstração</a>*/}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="estoque py-5" id="estoque">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h2 className="mb-4">Controle de Estoque</h2>
                                <p className="mb-4">
                                    Com o nosso sistema de controle de estoque para clínicas
                                    odontológicas, você pode gerenciar o estoque de materiais e
                                    produtos de forma prática e eficiente. É possível fazer o
                                    controle de entrada e saída de produtos, além de receber alertas
                                    quando determinados itens estiverem acabando.
                                </p>
                                {/*<a href="#" className="btn btn-primary">Agende uma demonstração</a>*/}
                            </div>
                            <div className="col-md-6">
                                <img src={estoque} alt="Estoque" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pacientes py-5" id="pacientes">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src={pacientes} alt="Pacientes" className="img-fluid"/>
                            </div>
                            <div className="col-md-6">
                                <h2 className="mb-4">Gerenciamento de Pacientes</h2>
                                <p className="mb-4">
                                    Com o nosso sistema de gerenciamento de pacientes para clínicas
                                    odontológicas, você pode armazenar e acessar as informações dos
                                    seus pacientes de forma segura e organizada. É possível fazer o
                                    cadastro completo de cada paciente, incluindo histórico médico e
                                    tratamentos realizados.
                                </p>
                                {/*<a href="#" className="btn btn-primary">Agende uma demonstração</a>*/}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="bg-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-0">&copy; 2023 - Todos os direitos reservados</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    {/*<a href="#">Política de Privacidade</a>*/}
                                </li>
                                <li className="list-inline-item">|</li>
                                {/*<li className="list-inline-item"><a href="#">Termos de Uso</a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )

}

export default Home;
