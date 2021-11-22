
import React from 'react'
import './Women.css'
import { menClothes, womenClothes, kidsClothes } from '../../api/products'
import Products from '../../components/Section/Products'
import Section from '../../components/Section/Section'




export default function Women() {

    return (
        <main >
            <Section title="Women's Collection" data={ womenClothes } />
            
                <div className="images-parent-w">
                    <div className="image-left-w">
                    <div className="image-text-w">
                        <h1 style={{color:"white"}}>A Chill Season ~~~</h1>
                        <h5 style={{color:"white"}}>Effortless design to wear anywhere</h5>
                        <button className="btn-image">SHOP NOW</button>
                    </div> 
                    </div>
                    <div className="image-right-w">
                    </div>
                </div>

            <div className="women-all">
                <Products  title="All Products" data={ womenClothes } />
                
            </div>         
        </main>
    )

    }