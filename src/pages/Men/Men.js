import React from 'react'
import './Men.css'
import {menClothes, womenClothes, kidsClothes} from '../../api/products'
import Section from '../../components/Section/Section'




export default function Men() {

    return (
        <main style={{}} >
            <Section title="Men's Collection" data={ menClothes } />
                <div className="images-parent">
                    <div className="image-left">

                    <div className="image-text">
                        <h1 style={{color:"white"}}>A Chill Season</h1>
                        <h5 style={{color:"white"}}>Effortless design to wear anywhere</h5>
                        <button style={{float:"right"}}>SHOP NOW</button>
                    </div> 
                    </div>
                    <div className="image-right">
                    </div>
                </div>
                        
        </main>
    )
}
                        
          
            
