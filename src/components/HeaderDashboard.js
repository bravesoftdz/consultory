import React from 'react'
import { useSelector } from 'react-redux'

const HeaderDashboard = () => {

    const user = useSelector((state => state.auth.user))
    console.log(user)
    return (
        <nav className="Navbar">
            <div className="Navbar__Bar" id="content-buttons">
                <button id="boton-sidebar"><i className="fas fa-bars"></i></button>
                <button id="boton-sidebar_left"><i className="fas fa-qrcode"></i></button>
                <div className="Navbar__Bar__Fixed" id="content-button_fixed">
                    <button id="boton-sidebar_fixed"><i className="fas fa-chart-bar"></i></button>
                </div>
                <p>Dashboard</p>
            </div>

            <div className="Navbar__Options">
                <p>{user.username}</p>
            </div>
        </nav>
    );
}

export default HeaderDashboard;