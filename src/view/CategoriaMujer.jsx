import React from 'react'
import { Context } from "../store/appContext";


const CategoriaMujer = () => {
    const {store, actions} = Context();


    return <>
    <h1>Categoria Mujer</h1>
        <ul>
            {/* {store.productList.map((element, index) => {
                {if(element.category === 'Mujer'){
                    return (
                        <li key={index}>
                            {element.name}
                        </li>
                        );
                    }}
                })
            } */}
        </ul>
    </>
}

export default CategoriaMujer;