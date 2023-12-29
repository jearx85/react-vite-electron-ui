import React from 'react';
import Logo from '../../assets/img/logo_nadhis_blanco.png';
import './NavBar.css';

export default function NavBar() {

    const toggleOffcanvas = () => {
        const mainContainer = document.querySelector(".mainContainer")
        mainContainer.classList.toggle("cerrado")
    };

  return (
    <div className="containerNav">
        <div className='row'>
        <div className="col">
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={Logo} alt="Nadhis logo" width="80" height="35"/>
                </a>
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            <button className="toggleButton" onClick={toggleOffcanvas}>Toggle</button>
            </nav>   
        </div>
    </div>
    </div>
    
  )
}
