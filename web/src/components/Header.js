import logo from "../img/dente.png";

function Header() {
    return (
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
                        >Entrar</a
                        >
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header;