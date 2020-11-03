import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import injectContext from './store/appContext'

import NavBarTop from './components/NavBarTop.jsx'

//SECCIONES
import { NotFound } from './view/NotFound';
import Kids from './view/Kids';
import Marcas from './view/Marcas';
import Home from './view/Home.jsx';




const App = () => {

  return (

    <>

      <NavBarTop />
      <div className="container">

       


            <BrowserRouter>
              <div>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/kids" component={Kids} />
                  {/* <Route exact path="/index.html" component={Inicio} />
                  <Route exact path="/mujer" component={Mujer} />
                  <Route exact path="/hombre" component={Hombres} />
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/tiendas" component={Tiendas} />*/}

                  <Route exact path="/marcas" component={Marcas} /> 
                  <Route render={() => <h1 className="notfound">Not found!</h1>} />
                </Switch>
              </div>
            </BrowserRouter>

      </div>
    </>
  );
}

export default injectContext(App);