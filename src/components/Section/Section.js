import React from 'react'
import './Section.css'
import Card from './Card/Card'
import Slider from 'react-slick'




export default function section({title, data}) {
    console.log(data);
    return (
        <section className='Section'>
            <ul className='Sub-header'>
                <li>New Arrivals</li>
                <li>Highlights</li>
                <li>Basics</li>
                <li>Denim</li>
                <li>Premium</li>
                <li>Shoes</li>
                <li>Accessories</li>
                <li>Sale %</li>
            </ul>
            <div style={{border:"2px solid black"}}>
                <h1>Trending Now</h1>
                <p>Stay up to date</p>
            </div>
            <div style={{border:"2px solid black"}}>
                <h4>{title} </h4>
                <Slider slidesToShow={3} slidesToscroll={3} dots={true}>
                {data?.map((item)=> 
                    
                        (
                        <Card key={item.id} product={item}   />
                        )

                        )}
                </Slider>
                    </div>
                </section>
            )
        }
                    
