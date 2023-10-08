import React from 'react'

export const Header = () => {
  return (
    <header>
    
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-black">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a href=""> <img src="../public/icono-tfl-web.webp" alt=""/></a>
            </li>
            <li className="nav-item active mt-2">
              <a className="nav-link text-light" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link text-light" href="#">Sobre nosotros</a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link text-light" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}