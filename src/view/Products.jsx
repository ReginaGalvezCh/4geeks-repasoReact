import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../components/Card"


const Products = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        console.log("--sotre--", store)
        actions.getProducts();
    }, []);

    return (
        <>
            <h1>productos</h1>
            <div className="row">
                {
                    store.productList.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <Card key={index} name={item.name} price={item.price} descripttion={item.description} assessment={item.assessment} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;