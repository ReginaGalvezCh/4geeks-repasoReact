import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavBarTop = (props) => {
    const history = useHistory();



    const handleFormSubmit = async (e) => {
        e.preventDefault();

    }
    <Link to="/"> home </Link>

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <Link to="/">
                    <span className="navbar-brand">Carro de compras</span>
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/">
                                <span class="sr-only">Inicio</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/products">
                                <span className="nav-link" >Productos</span>
                            </Link>

                        </li>
                        <li class="nav-item">
                            <Link to="/sales">
                                <span className="nav-link" >Tiendas</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/marcas">
                                <span className="nav-link" >Marcas</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default NavBarTop;
