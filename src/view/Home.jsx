import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faHatCowboy, faChild } from '@fortawesome/free-solid-svg-icons'
import Slider from '../components/Slider'
import FeaturedList from '../components/FeaturedList'

const Home = () =>{

return (
    <div className="row">

        <div className="col-lg-3">
            <h1 className="my-4">Categorias</h1>
            <div className="list-group">
                <Link to="/mujer" className="list-group-item"> <FontAwesomeIcon icon={faFemale} /> Mujer </Link>
                <Link to="/hombre" className="list-group-item"> <FontAwesomeIcon icon={faHatCowboy} /> Hombre</Link>
                <Link to="/kids" className="list-group-item"> <FontAwesomeIcon icon={faChild} /> Niños </Link>
             
             
            </div>
        </div>

        <div className="col-lg-9">
            <Slider/>
            <FeaturedList/>
        </div>
    </div>

)

}

export default Home