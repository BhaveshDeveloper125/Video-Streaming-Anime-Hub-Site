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
                    <tr className='viewedtitle'>
                        <td>
                            <br />
                            <h1>
                                Most Viewed Category
                            </h1>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card url={deku} title={'My Hero Academia'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                My Hero Academia
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={goku} title={'Bragon Ball Z'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                Dragon Ball Z
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={aot} title={'Attack On Titan'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                Attack on Titan
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={ms} title={'My Star'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                My Star
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={gokuu} title={'Dragon Ball Z'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                Dragon Ball Z
                            </h1>
                        </td>
                    </tr>
                    <br /><br />

                    <tr>
                        <td>
                            <h2>        
                                View More
                            </h2>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="anotherbox2">
                <table>
                    <tr className='populartitle'>
                        <td>
                            <br />
                            <h1>
                                Most Popular Category
                            </h1>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card url={deku} title={'My Hero Academia'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                My Hero Academia
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={goku} title={'Bragon Ball Z'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                Dragon Ball Z
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={aot} title={'Attack On Titan'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                Attack on Titan
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={ms} title={'My Star'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                My Star
                            </h1>
                        </td>
                    </tr>
                    <br />
                    
                    <tr>
                        <td>
                            <Card url={gokuu} title={'Dragon Ball Z'}/>
                        </td>
                        <td>
                            <h1 className='maintitle'>
                                Dragon Ball Z
                            </h1>
                        </td>
                    </tr>
                    <br /><br />

                    <tr>
                        <td>
                            <h2>        
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

