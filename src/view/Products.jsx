import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardDeck, Card, Button } from "react-bootstrap"


const Products = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        console.log("--sotre--", store)
        actions.getProducts();
    }, []);

    return (
        <>
            <h1>productos</h1>
            {
                store.productList.map((item, index) => {
                    return (
                        <h2>card</h2>
                    )
                })}
        </>
    )
}

export default Products;