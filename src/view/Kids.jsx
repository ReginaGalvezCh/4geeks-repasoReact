import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { CardDeck, Card } from 'react-bootstrap'

const Kids = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(()=>{actions.getProducts()}, []);

    return (
        <>

            <br/><h1>Sección Niños</h1>
            <CardDeck>
                {
                    store.productList.map((item, index) => {
                        {if(item.category === 'Niños'){ 
                        return (
                            <Card key={index} style={{ width: '19rem' }}>
                                <Card.Img variant="top" src="https://wrmx00.epimg.net/radio/imagenes/2019/04/28/en_fin/1556471650_774468_1556472061_noticia_normal.jpg" />
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
        </>
    ) 
}

export default Kids