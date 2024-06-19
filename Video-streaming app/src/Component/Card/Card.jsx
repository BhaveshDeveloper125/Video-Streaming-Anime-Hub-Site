import React from 'react'
import './Card.css'
import rengoku from '../../assets/1.jpg'


function Card(prop) 
{
    return(
        <>
            <div className="Samplecard">
                <img src={prop.url} alt="" />
                <div className="Sampleinformation">
                    <h1>{prop.title}</h1>
                </div>
            </div>
        </>
    );
}

export default Card

