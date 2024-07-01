import React from 'react'
import './About.css'
import crunchy from '../../assets/crunchy.jpg'
import event from '../../assets/events.jpg'
import merch from '../../assets/merch.jpg'
import streaming from '../../assets/streaming.jpg'
import theater from '../../assets/theater.jpg'
import comicbook from '../../assets/comicbook.jpg'
import mobilegames from '../../assets/mobilegames.jpg'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';



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

            <br /><br />

            <button className='hiring'>
                We're Hiring
            </button>

            <br /><br /><br /><br /><br />

            <div className="activity_container1">
                <img src={streaming} alt=""  className='marging_img'/>

                
                <img src={event} alt=""  className='marging_img'/>
            
            </div>

                <h2 className='straming_events_text' id='stream_text'>
                    Streaming
                </h2>

                <h2 className='straming_events_text' id='event_text'>
                    Events
                </h2>


            <br /><br /><br />

            <div className="activity_container2">

                <img src={theater} alt=""  className='marging_img'/>
                
                <img src={merch} alt=""  className='marging_img'/>

            </div>

            <h2 className='straming_events_text' id='theater_text'>

                THEATRICAL  DISTRIBUTION
                    
            </h2>

            <h2 className='straming_events_text' id='merch_text'>
                MERCHANDISE   
            </h2>

            <br /><br /><br />


            <div className="activity_container3">

                <img src={mobilegames} alt=""  className='marging_img'/>
                
                <img src={comicbook} alt=""  className='marging_img'/>

            </div>

            <h2 className='straming_events_text' id='mobilegame_text'>

                MOBILE GAMES
                    
            </h2>

            <h2 className='straming_events_text' id='manga_text'>
                MANGA/COMIC BOOKS   
            </h2>

            <br /><br /><br /><br /><br />

                <button className='hiring'>
                    <Link to="/" id='link_color'>
                        Home
                    </Link>
                </button>

                <br /><br /><br /><br /><br />


            
        </div> 
    );
}

export default About
