import React from 'react'
import './Mostviewed.css'
import Card from '../Card/Card';
import deku from '../../assets/deku.webp'
import goku from '../../assets/goku.jpg'
import aot from '../../assets/aot.jpg'
import ms from '../../assets/mystar.webp'
import gokuu from '../../assets/gokuu.jpg'
// import pookie from '../../assets/pookie.jpg'


function Mostviewed() 
{
    return(
        <>
            <div className="anotherbox">
                <table>
                    <tr>
                        <td>
                            <Card url={deku}/>
                        </td>
                        <td>
                            <h1>
                                MostViewed Title
                            </h1>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <Card url={goku}/>
                        </td>
                        <td>
                            <h1>
                                MostViewed Title
                            </h1>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <Card url={aot}/>
                        </td>
                        <td>
                            <h1>
                                MostViewed Title
                            </h1>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <Card url={ms}/>
                        </td>
                        <td>
                            <h1>
                                MostViewed Title
                            </h1>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <Card url={gokuu}/>
                        </td>
                        <td>
                            <h1>
                                MostViewed Title
                            </h1>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <h2>
                                <br /><br />
                                View More
                            </h2>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Mostviewed

