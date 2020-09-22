import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Container">
                <div className="Logo__Footer">
                    <img src={require('../images/logofooter.png')} alt="" />
                </div>
                <div className="About__Footer">
                    <div>
                    <p>Quiénes somos</p>
                    <ul>
                        <li>
                            <Link to="#">Historia</Link>
                        </li>
                        <li>
                            <Link to="#">Socios</Link>
                        </li>
                        <li>
                            <Link to="#">Logros</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="Benef__Footer">
                    <div>
                    <p>Beneficios</p>
                    <ul>
                        <li>
                            <Link to="#">Eficiencia</Link>
                        </li>
                        <li>
                            <Link to="#">Optimización</Link>
                        </li>
                        <li>
                            <Link to="#">Cumpliento Legal</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="Services__Footer">
                   <div>
                   <p>Dirección</p>
                    <span>Dirección Av. Salaverry Nº 109 2º piso, Chiclayo</span>
                    <p style={{marginTop: "20px"}}>Teléfono</p>
                    <span>979 651 742 / 993 520 343</span>
                    <p style={{marginTop: "20px"}}>Correo</p>
                    <span>consultorioempresarialchiclayo@gmail.com</span>
                   </div>
                </div>
                <div className="Socials__Footer">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;