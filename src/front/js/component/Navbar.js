import React from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">Galactic Product</div>
                <ul className="navbar-links">
                    <li><a href="#intro">Inicio</a></li>
                    <li><a href="#features">Características</a></li>
                    <li><a href="#video">Demo</a></li>
                    <li><a href="#cta">Reserva</a></li>
                </ul>
                <div className="navbar-buttons">
                    <button className="btn primary">Iniciar Sesión</button>
                    <button className="btn secondary">Registrarse</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
