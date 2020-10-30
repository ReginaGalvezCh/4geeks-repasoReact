import React,{useEffect} from 'react';
import { Card, Button } from 'react-bootstrap'

const FeaturedList = (props) => {

      useEffect(() => {
      
    //   actions.fetchUser();

    }, [] );
    
    return (
        <>
            <h1>Productos Destacados</h1>

            {/* {store.productList.map((item, index) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://wrmx00.epimg.net/radio/imagenes/2019/04/28/en_fin/1556471650_774468_1556472061_noticia_normal.jpg" />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                price: {item.price}
                                stock: {item.stock}
                                shortDesc: {item.shortDesc}
                                description: {item.description}
                                assessment: {item.assessment}
                    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })} */}

        </>
    )
}

export default FeaturedList