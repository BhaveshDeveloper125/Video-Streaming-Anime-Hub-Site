import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';


function Navigation() 
{
    return(
        <>
            <table className='tbl'>
                <tr className='tableraw'>
                    <td style={{textAlign:'center'}}>
                            Home
                    </td>
                    <td style={{textAlign:'center'}}>
                        <Link to="about">
                            About
                        </Link>
                    </td>
                    <td style={{textAlign:'center'}}>
                        <Link to="conatctus">
                            Contact
                        </Link>
                    </td>
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

