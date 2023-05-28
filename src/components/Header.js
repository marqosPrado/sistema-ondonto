import logo from "../img/dente.png";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Cookies from 'js-cookie';

function Header() {

    const [switchOn, setSwitchOn] = useState(false);

    useEffect(() => {
        const darkTheme = Cookies.get('darkTheme');
        if (darkTheme === 'true') {
            setSwitchOn(true);
            let body = document.getElementById('body')
            body.setAttribute('data-bs-theme', "dark")
        }
    }, []);

    const handleSwitchToggle = () => {
        const newState = !switchOn;
        setSwitchOn(newState);
        Cookies.set('darkTheme', newState);

        let body = document.getElementById('body')
        body.setAttribute('data-bs-theme', body.dataset.bsTheme === "dark" ? "light" : "dark")
    };

    return (<div className="container">
        <header
            className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
        >
            <Link
                to="/dashboard"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
            >
                <img className="bi me-2" width="40" src={logo} alt="Logo"/>
                <span className="fs-4">Takeshi Odonto Clinics</span>
            </Link>

            <ul className="nav nav-pills">
                <li className={"nav-item btn"}>
                    <Link to={"/estoque"} className={"text-decoration-none"}>
                        Estoque
                    </Link>
                </li>
                <li className={"nav-item btn"}>
                    <Link to={"/pacientes"} className={"text-decoration-none"}>
                        Pacientes
                    </Link>
                </li>
                <li className={'nav-item btn'}>
                    <div className={'form-check form-switch'}>
                        <label htmlFor="switch">Modo Escuro</label>
                        <input
                            className="form-check-input" type="checkbox" role="switch"
                            id="switch"
                            checked={switchOn}
                            onChange={handleSwitchToggle}
                        />
                    </div>
                </li>
                <li className="nav-item btn btn-secondary">
                    <Link to={"/"} className={"text-decoration-none text-black"}>
                        Sair
                    </Link>
                </li>
            </ul>
        </header>
    </div>)
}

export default Header;