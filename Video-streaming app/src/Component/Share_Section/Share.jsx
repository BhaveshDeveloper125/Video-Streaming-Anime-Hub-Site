import React from 'react'
import './Share.css'
import insta from '../../assets/ins.png'
import meta from '../../assets/meta.jpg'
import reddit from '../../assets/reddit.jpg'
import thread from '../../assets/thread.avif'
import x from '../../assets/X.webp'


function Share() 
{
    return(
        <>
            <h3>Share Anime hub</h3>
            <br />
            <br />
            <div className="iconContainer">
                <img src={insta} alt="instagram image" id='insta'/>
                <img src={meta} alt="" id='meta'/>
                <img src={reddit} alt="" id='reddit'/>
                <img src={thread} alt="" id='thread'/>
                <img src={x} alt="" id='x'/>
            </div>
        </>
    );
}

export default Share

