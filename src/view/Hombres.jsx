import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faHatCowboy, faChild } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../store/appContext';
import { CardDeck, Card } from 'react-bootstrap'

const Hombres = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(()=>{actions.getProducts()}, []);

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
                <br/><h1>Sección Hombres</h1>
                <CardDeck>
                    {
                        store.productList.map((item, index) => {
                            {if(item.category === 'Hombre'){ 
                            return (
                                <Card key={index} style={{ width: '19rem' }}>
                                    <Card.Img variant="top" src={item.image} style={{maxHeight:'140px'}} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            price: {item.price}<br />
                                            stock: {item.stock}<br />
                                            shortDesc: {item.shortDesc}<br />
                                            description: {item.description}<br />
                                            assessment: {item.assessment}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        }}
                        })
                    }
                </CardDeck> 
            </div>
        </div>
    ) 
}

export default Hombres