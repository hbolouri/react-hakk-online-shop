import React from 'react'
import './Card.css'



export default function Card({product}) {
    console.log(product);
    return <div className="Card" style={{border:"1px solid red", backgroundImage:`url(${product.image})`}} >
        {product.title}
        </div>;
}
