import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../images/logo.png'

const Sidebar = () => {

    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('token');
        window.location.replace('/')
    }

    return (
        <div className="Sidebar" id="sidebar">
            <div className="Sidebar__Wrapper">
                <div className="Logo__Rc">
                    <img src={logo} alt="imagen de logo" />
                    <span>Cons. Empresarial</span>
                </div>
                <div className="Nav">
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="fas fa-laptop-house"></i>
                                <span>Pagina Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>Administrador</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/banners">
                                <i className="far fa-image"></i>
                                <span>Banners</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/clientes">
                                <i className="fas fa-users"></i>
                                <span>Clientes</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={logout} to="#">
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Cerra Sesión</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;