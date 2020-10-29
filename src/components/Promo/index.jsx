import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Navbar, Nav, Button } from 'react-bootstrap';

import image from './assets/promo.png';
const Promo = (props) =>{

    return(
        
        <img src={image} alt="..." class="img-thumbnail"/>
    )

}

export default Promo;
