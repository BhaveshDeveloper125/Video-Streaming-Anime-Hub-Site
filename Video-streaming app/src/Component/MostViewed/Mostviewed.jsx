import React from 'react'
import './Mostviewed.css'
import Card from '../Card/Card';
import deku from '../../assets/deku.webp'
import goku from '../../assets/goku.jpg'
import aot from '../../assets/aot.jpg'
import ms from '../../assets/mystar.webp'
import gokuu from '../../assets/gokuu.jpg'
import pookie from '../../assets/pookie.jpg'


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
                    </tr>
                    <tr>
                        <td>
                            <Card url={goku}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card url={aot}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card url={ms}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card url={gokuu}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card url={pookie}/>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Mostviewed

