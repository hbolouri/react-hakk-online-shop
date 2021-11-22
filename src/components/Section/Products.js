import React, { useContext } from 'react'
import './Product.css'
import ReactStar from "react-rating-stars-component";
import { Link } from 'react-router-dom'
import { MyContext } from "../../Context/context";




export default function Products({ title, data }) {

    const { bag, setBag } = useContext(MyContext);
    let { quantity, setQuantity } = useContext(MyContext);

    const addToBag = (item) => {
      let checkItem = bag.find((product) => product.title === item.title);
      if (checkItem) {
       let copyItem = {...checkItem}
       copyItem.number++
       quantity++;
       setQuantity(quantity);
      setBag([...bag]);
    } else {
      item.number = 1;
      setBag([...bag, item]);
      quantity++;
      setQuantity(quantity);
    }
       
};
    
return (

    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
        <h4>{title}</h4>

    <div style={{ display: "flex", flexWrap: "wrap" }} > 
            {data.map(product=>{
                return (
                    <div key= {product.id} style = {{width:"400px", margin:"25px", padding:"50px", border:"1px solid black", borderRadius:"10px",textAlign:"center"}}>
                        <Link to={`/singleProduct/${product.id}`}
                       state={product}
                        >
                            <img src={product.image} width="200" height="200"  alt="bracelets"  />
                            <h6> {product.title} </h6>
                        </Link>
                        <h3>$ {product.price} </h3>
                        <button onClick={()=>addToBag(product)} >Add to Cart</button>
                        <ReactStar
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value= {product.rating.rate}
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
            
