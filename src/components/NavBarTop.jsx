import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Navbar, Nav, Button } from 'react-bootstrap';

const NavBarTop = (props) =>{
    const history = useHistory();

 

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
   
    }


    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
            <a class="navbar-brand" href="#">Carro de compras</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio
                    <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tiendas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Marcas</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>

    )

}

export default NavBarTop;
