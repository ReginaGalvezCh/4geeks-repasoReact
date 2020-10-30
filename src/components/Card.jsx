import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

const CardProducts = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProducts();
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://g-lamadrid.com/es/les-creations/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/7/67be88f1d6b90541d54e33963dfce770.jpg" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>$ {props.price}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Footer>{props.assessment}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default CardProducts;
