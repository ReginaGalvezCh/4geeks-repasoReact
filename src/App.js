import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faHatCowboy, faChild } from '@fortawesome/free-solid-svg-icons'

import { Row, Col} from 'react-bootstrap';
import injectContext from "./store/appContext"; 

import NavBarTop from './components/NavBarTop.jsx'
import Slider from './components/Slider'

//SECCIONES
import { Home } from './view/Home.jsx';
import Favorites from './view/Favorites.jsx';
import { NotFound } from './view/NotFound';
import Register from './view/Register';



const App = () => {
  
  return (
   
    <>
      <NavBarTop/>
      <div className="container">

          <div className="row">

            <div className="col-lg-3">

              <h1 className="my-4">Shop Name</h1>
              <div className="list-group">
                <a href="#" className="list-group-item"><FontAwesomeIcon icon={faFemale} /> Mujer</a>
                <a href="#" className="list-group-item"><FontAwesomeIcon icon={faHatCowboy} /> Hombre</a>
                <a href="#" className="list-group-item"><FontAwesomeIcon icon={faChild} /> Niños</a>
              </div>

            </div>
           
            <div className="col-lg-9">

              <Slider/>
              

              <div className="row">

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Item One</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Item Two</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Item Three</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Item Four</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Item Five</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Item Six</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>

              </div>
            

            </div>
        

          </div>
        

        </div>
    </>
  );
}

export default injectContext(App);
