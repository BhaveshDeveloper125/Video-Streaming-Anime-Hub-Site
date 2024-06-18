import React from 'react'
import './Navigation.css'

function Navigation() 
{
    return(
        <>
            <table>
                <tr>
                    <td style={{textAlign:'center'}}>Home</td>
                    <td style={{textAlign:'center'}}>About</td>
                    <td style={{textAlign:'center'}}>Contact</td>
                    <td>
                        <form action="">
                            <input type="search" name="" id="" placeholder='Serch here...' />
                        </form>
                    </td>
                    <td>
                        <button id='loginbtn'>
                            Login
                        </button>
                    </td>
                </tr>
            </table>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Navigation

