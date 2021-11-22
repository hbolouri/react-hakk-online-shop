import React from 'react'
import './Product.css'
import ReactStar from "react-rating-stars-component";
import { Link } from 'react-router-dom'




export default function Products({ title, data }) {



   



    return (

        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
            <h4>{title}</h4>

        <div style={{ display: "flex", flexWrap: "wrap" }} > 
                {data.map(item=>{
                    return (
                        <div key= {item.id} style = {{width:"400px", margin:"25px", padding:"50px", boxShadow:"2px 5px 5px #443D3B", borderRadius:"10px",textAlign:"center"}}>
                            <Link to={`/products/${item.id}`}
                           state={item}
                            >
                                <img src={item.image} width="200" height="200"  alt="bracelets"  />
                                <h6> {item.title} </h6>
                            </Link>
                            <h3>$ {item.price} </h3>
                            <button >Add to Cart</button>
                            <ReactStar
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value= {item.rating.rate}
                            isHalf = {true}
                            edit = {false}
                            />
                
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}



{/* <Route path="/products/:id" element={<SingleProduct/>}/> */}