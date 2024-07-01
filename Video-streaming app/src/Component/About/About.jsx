import React from 'react'
import './About.css'
import crunchy from '../../assets/crunchy.jpg'

function About() 
{
    return(
        <div>
            <div className="imgcollecion">
                <img src={crunchy} alt="" />
            </div>

            <div className="textcontainer">

                <br /><br /><br />

            <h1 className='text'>
                Anime hub champions the art and culture of Anime to a <br /> passionate community of fans around the world.
            </h1>

            </div>

            <button className='hiring'>
                We're Hiring
            </button>
        </div>
    );
}

export default About
