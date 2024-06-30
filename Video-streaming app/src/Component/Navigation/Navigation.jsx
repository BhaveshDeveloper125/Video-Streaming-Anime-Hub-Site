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
                        <Link to="/">Home</Link>
                        {/* <a href="/">Home</a> */}
                    </td>
                    <td style={{textAlign:'center'}}>
                        <Link to="/about">About</Link>
                        {/* <a href="about">About</a> */}
                    </td>
                    <td style={{textAlign:'center'}}>
                        <Link to="/conatctus">Contact</Link>
                        {/* <a href="conatctus">Contact</a> */}
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

