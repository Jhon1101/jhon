import React from 'react';
import './header.css';

function Header() {
return (
    <div className='contenedor'>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <img src='logo.png' className='logo' alt='logo' />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <i className="bi bi-house-gear-fill"></i>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <i className="bi bi-book-half"></i>
            <li className="nav-item">
                <a className="nav-link" href="#">Tutoriales</a>
            </li>
            <i className="bi bi-filter-left"></i>
            <li className="nav-item">
                <a className="nav-link" href="#">Referencias</a>
            </li>
            <i className="bi bi-folder-fill"></i>
            <li className="nav-item">
                <a className="nav-link" href="#">Recursos</a>
            </li>
            <i className="bi bi-telephone-fill"></i>
            <li className="nav-item">
                <a className="nav-link" href="#">Contactos</a>
            </li>
            <i className="bi bi-pen-fill"></i>
            <li className="nav-item">
                <a className="nav-link" href="#">Registrarse</a>
            </li>
            <i className="bi bi-key-fill"></i>
            <li className="nav-item">
                <a className="nav-link" href="#">Iniciar sesión</a>
            </li>
            </ul>
            <i className="bi bi-search"></i>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
    </div>
);
}

export default Header;