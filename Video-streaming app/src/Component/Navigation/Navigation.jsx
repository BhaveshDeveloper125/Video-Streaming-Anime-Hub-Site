import React from 'react'
import './Navigation.css'

function Navigation() 
{
    return(
        <>
            <table className='tbl'>
                <tr className='tableraw'>
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
        </>
    );
}

export default Navigation

