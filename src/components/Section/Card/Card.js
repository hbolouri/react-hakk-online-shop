import React from 'react'
import './Card.css'



export default function Card({product}) {
    console.log(product);
    return (
        <div className="Card" style={{backgroundImage:`url(${product.image})`}} >
       <h6>{product.title}</h6> 
        </div>
        )
}
