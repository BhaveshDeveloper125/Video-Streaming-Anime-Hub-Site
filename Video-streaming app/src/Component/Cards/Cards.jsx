import React from 'react'
import './Card.css'
import ichigo from '../../assets/4.jpg'


function Cards() 
{
    return(
        <>
            <div className="cardcontainer">
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="info">
                        <h1 style={{color:'aliceblue'}}>Bleach</h1>
                        <p style={{color:'aliceblue'}}>Thousand years of blood war arc</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="info">
                        <h1 style={{color:'aliceblue'}}>Bleach</h1>
                        <p style={{color:'aliceblue'}}>Thousand years of blood war arc</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="info">
                        <h1 style={{color:'aliceblue'}}>Bleach</h1>
                        <p style={{color:'aliceblue'}}>Thousand years of blood war arc</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="info">
                        <h1 style={{color:'aliceblue'}}>Bleach</h1>
                        <p style={{color:'aliceblue'}}>Thousand years of blood war arc</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="info">
                        <h1 style={{color:'aliceblue'}}>Bleach</h1>
                        <p style={{color:'aliceblue'}}>Thousand years of blood war arc</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ichigo} alt="" />
                    <div className="info">
                        <h1 style={{color:'aliceblue'}}>Bleach</h1>
                        <p style={{color:'aliceblue'}}>Thousand years of blood war arc</p>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
        </>
    );
}

export default Cards

