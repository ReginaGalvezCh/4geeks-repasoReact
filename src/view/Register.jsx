import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeaderSection from '../components/HeaderSection'
import Promo from '../components/Promo' 

const Register = () =>{

    return(
        <>
            <HeaderSection 
                title='Registrate' 
                description='para acceder a descuentos'
                view='register'
            />
            <Container>
                <Row>
                    <Col>
                        <Promo/>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese un email" />
                                <Form.Text className="text-muted">
                                Nunca compartiremos su correo electrónico con nadie más.
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    
                    </Col>
                    
                </Row>
            
            </Container>

        </>      
    )

}

export default Register; 



