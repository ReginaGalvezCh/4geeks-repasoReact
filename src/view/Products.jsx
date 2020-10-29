import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardDeck, Card, Button } from "react-bootstrap"


const Products = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getProducts();
    }, []);
    {
        store.productList.map((item, index) => {
            return (
                <>
                    <div className="row">
                        <div className="col">
                            <CardDeck className="m-4" key={index}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top"
                                        src="https://image.freepik.com/foto-gratis/azulejo-cuadrado-gris-fisuras_1154-696.jpg" />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>$29.990</Card.Text>
                                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Text>
                                        <Card.Footer className="text-muted"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></Card.Footer>
                                        <Button variant="outline-danger" className="justify-content-end ml-4"></Button>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </div>
                    </div>
                </>
            )
        })
    }
}

export default Products;