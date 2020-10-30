import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faHatCowboy, faChild } from '@fortawesome/free-solid-svg-icons'

import { Row, Col } from 'react-bootstrap';

import injectContext from './store/appContext'

import NavBarTop from './components/NavBarTop.jsx'
import Slider from './components/Slider'

//SECCIONES
import { NotFound } from './view/NotFound';
import Products from "./view/Products"



const App = () => {

  return (

    <>

      <NavBarTop />
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

            <BrowserRouter>
              <div>
                <Switch>
                  {/* <Route exact path="/index.html" component={Inicio} />
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/mujer" component={Mujer} />
            <Route exact path="/hombre" component={Hombres} />
            <Route exact path="/kids" component={Kids} /> */}
            <Route exact path="/products" component={Products} />
            {/* <Route exact path="/tiendas" component={Tiendas} />
            <Route exact path="/marcas" component={Marcas} /> */}
                  <Route render={() => <h1 className="notfound">Not found!</h1>} />
                </Switch>
              </div>
            </BrowserRouter>


            {/* <Slider /> */}


            


          </div>


        </div>


      </div>
    </>
  );
}

export default injectContext(App);