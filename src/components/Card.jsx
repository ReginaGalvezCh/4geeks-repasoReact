import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

const Card = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProducts();
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Subtitle>$ {props.data.price}</Card.Subtitle>
        <Card.Text>{props.data.description}</Card.Text>
        <Card.Footer>{props.data.assessment}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Card;
