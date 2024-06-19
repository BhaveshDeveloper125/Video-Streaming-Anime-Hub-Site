import React from 'react'
import './Card.css'
import rengoku from '../../assets/1.jpg'
import naruto from '../../assets/2.jpg'
import eren from '../../assets/3.jpg'
import ichigo from '../../assets/4.jpg'
import goku from '../../assets/5.jpg'
import Card from '../Card/Card'


function Cards() 
{
    function PreviousScrollChanger()
    {
        const cardcontainer = document.querySelector('.cardcontainer');
    
        const scrollAmount = 300
        cardcontainer.scrollLeft -= scrollAmount
    }
    function NextScrollChanger()
    {
        const cardcontainer = document.querySelector('.cardcontainer');
       
        const scrollAmount = 300
        cardcontainer.scrollLeft += scrollAmount
    }
    return(
        <>
            <br />
            <h1 className="trending">Top Trending</h1>
            <br /><br />
            <div className="cardcontainer">
                <Card url={rengoku} title={'Demon Slayer'}/>
                <Card url={naruto} title={'Naruto Shippudent'}/>
                <Card url={eren} title={'Attack on Titan'}/>
                <Card url={ichigo} title={'Bleach'}/>
                <Card url={goku} title={'Dragon Ball Z'}/>
                <Card url={naruto} title={'Naruto Shippudent'}/>
                <Card url={eren} title={'Attack on Titan'}/>
                <Card url={rengoku} title={'Demon Slayer'}/>
                <Card url={goku} title={'Dragon Ball Z'}/>
                <Card url={ichigo} title={'Bleach'}/>
            </div>

            <div className="buttonSection">
                <button className="previous" onClick={PreviousScrollChanger}> &lt; </button>
                <button className="nextt" onClick={NextScrollChanger}> &gt; </button>
            </div>
            <br /><br />
        </>
    );
}

export default Cards

