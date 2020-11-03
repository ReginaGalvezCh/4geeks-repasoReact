/* eslint-disable no-lone-blocks */
import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faHatCowboy, faChild } from '@fortawesome/free-solid-svg-icons'

import { Context } from "../store/appContext";
import {Card, Button, CardGroup} from 'react-bootstrap'


const Mujer = (props) => { 
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const itemMujeres = store.productList.filter((element,index) => {
        return element.category === 'Mujer'
    })

    return (
        <div className="row">

            <div className="col-lg-3">
                <h1 className="my-4">Categorias</h1>
                <div className="list-group">
                mujer
                    <Link to="/mujer" className="list-group-item"> <FontAwesomeIcon icon={faFemale} /> Mujer </Link>
                    <Link to="/hombre" className="list-group-item"> <FontAwesomeIcon icon={faHatCowboy} /> Hombre</Link>
                    <Link to="/kids" className="list-group-item"> <FontAwesomeIcon icon={faChild} /> Niños </Link>
                
                
                </div>
            </div>

            <div className="col-lg-9">
            <div className='container-fluid'>
                <h1 className='text-center' style={{margin: '30px'}}>Categoria Mujer</h1>
                <CardGroup className='flew-wrap'>
                    <div className='row'>
                    {itemMujeres.map((element, index) => {
                        return ( 
                                <Card key={index} className='col-4'>
                                    <Card.Img variant="top" src={element.image} style={{maxHeight:'140px'}}/>
                                    <Card.Body>
                                        <Card.Title>{element.name}</Card.Title>
                                        <Card.Text>
                                            stock: {element.stock}
                                        </Card.Text>
                                        <Card.Text>
                                            {element.price}
                                        </Card.Text>
                                        <Card.Text>
                                            {element.shortDesc}
                                        </Card.Text>
                                        <Card.Text>
                                            {element.assessment}
                                        </Card.Text>
                                        <Button  className='mx-2' variant="primary">View More</Button>
                                    </Card.Body>
                                </Card>                                                
                            
                                )
                            }
                        )
                        }
                    </div>
                </CardGroup>
            </div>
            </div>
        </div>

        )
}

export default Mujer;