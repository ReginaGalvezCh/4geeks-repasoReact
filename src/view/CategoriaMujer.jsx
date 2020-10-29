import React from 'react'
import { Context } from "../store/appContext";
import {Card, Button} from 'react-bootstrap'


const CategoriaMujer = (props) => {
    const {store, actions} = Context();


    return (
    <>
        <h1>Categoria Mujer</h1>
        <CardDeck>
            {store.productList.map((element, index) => {
                {if(element.category === 'Mujer'){
                    return (
                        <>
                            <Card key={index}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text>
                                        {element.stock}
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
                        </>
                        )
                    }}
                })
            }
        </CardDeck>
    </>)
}

export default CategoriaMujer;