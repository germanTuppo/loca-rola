import React from 'react';
import Count from '../ItemCount/ItemCount';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">La Loca Rola</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* El active me gustaria que sea automático*/}
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                        </a>
                        {/* Aca yo quisiera que automáticamente se lean categorias desde un JSON o una Db */}
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Remeras</a></li>
                            <li><a className="dropdown-item" href="#">Buzos</a></li>
                            <li><a className="dropdown-item" href="#">Camperas</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                         <Count /> 
                    </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;