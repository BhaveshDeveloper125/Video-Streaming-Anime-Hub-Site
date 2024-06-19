import React from 'react'
import './Card.css'
import ichigo from '../../assets/4.jpg'
import rengoku from '../../assets/1.jpg'
import naruto from '../../assets/2.jpg'
import eren from '../../assets/3.jpg'
import goku from '../../assets/5.jpg'


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
            <br /><br /><br />
            <h1 className="trending">Top Trending</h1>
            <br /><br />
            <div className="cardcontainer">
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={rengoku} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={naruto} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={eren} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={goku} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={rengoku} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={naruto} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={eren} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
                <div className="card">
                    <img src={goku} alt="" />
                    <div className="information">
                        <h1>Bleach</h1>
                        <h4>Thousand years of blood war arc</h4>
                    </div>
                </div>
            </div>

            <div className="buttonSection">
                <button className="previous" onClick={PreviousScrollChanger}> &lt; </button>
                <button className="nextt" onClick={NextScrollChanger}> &gt; </button>
            </div>


            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
        </>
    );
}

export default Cards

