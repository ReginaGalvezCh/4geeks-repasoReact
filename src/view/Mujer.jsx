/* eslint-disable no-lone-blocks */
import React, {useEffect, useContext} from 'react'
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
        <div className='container-fluid'>
            <h1 className='text-center' style={{margin: '30px'}}>Categoria Mujer</h1>
            <CardGroup className='flew-wrap'>
                <div className='row'>
                {itemMujeres.map((element, index) => {
                    return ( 
                            <Card key={index} className='col-4'>
                                <Card.Img variant="top" src="holder.js/100px180" />
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
        )
}

export default Mujer;