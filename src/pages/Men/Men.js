import React from 'react'
import './Men.css'
import {menClothes, womenClothes, kidsClothes} from '../../api/products'
import Section from '../../components/Section/Section'




export default function Men() {

    return (
        <section style={{border:"2px solid black"}} >
            <Section title="Men's Collection" data={ menClothes } />
                
        </section>
    )
}
          
            
