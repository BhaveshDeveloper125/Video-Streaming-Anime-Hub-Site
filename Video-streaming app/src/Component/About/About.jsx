import React from 'react'
import './About.css'
import crunchy from '../../assets/crunchy.jpg'

function About() 
{
    return(
        <div>
            <div className="crunchyimg">
                <img src={crunchy} alt="" id='crunchy'/>
            </div>
        </div>
    );
}

export default About
