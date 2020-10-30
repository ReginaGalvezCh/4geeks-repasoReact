import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faHatCowboy, faChild } from '@fortawesome/free-solid-svg-icons'
import Slider from '../components/Slider'

const Home = () =>{

return (
    <div className="row">

        <div className="col-lg-3">
            <h1 className="my-4">Categorias</h1>
            <div className="list-group">
                <a href="#" className="list-group-item"><FontAwesomeIcon icon={faFemale} /> Mujer</a>
                <a href="#" className="list-group-item"><FontAwesomeIcon icon={faHatCowboy} /> Hombre</a>
                <a href="#" className="list-group-item"><FontAwesomeIcon icon={faChild} /> Niños</a>
            </div>
        </div>

        <div className="col-lg-9">
            <Slider/>
        </div>
    </div>

)

}

export default Home