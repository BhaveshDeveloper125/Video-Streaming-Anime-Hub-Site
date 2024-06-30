import React from 'react'
import './ContactUs.css'
import Share_Section from '../Share_Section/Share'
import Footer from '../Footer/Footer'


function ContactUs() 
{
    return(
        <div className='ccc'>
            <div className="contactContainer">
                <h1 className='CUS'>
                    Contact Us
                </h1>

                <h5 className='CUS2'>
                    Please submit your inquiry using the form below and we will get in touch with you shortly.
                </h5>
                <br /><br /><br />

                <Share_Section/>
                <br /><br /><br />

                <div className="contact_form_container">

                    <form action="" className='contact_form'>

                        <label for="email">Your E-mail</label><br />
                        <input type="email" name="" id="email" placeholder='name@example.com'/><br /><br /><br />

                        <label for="subject">Subject</label><br />
                        <input type="text" name="" id="subject" placeholder=''/><br /><br /><br />

                        <label for="message">Message</label><br />
                        <textarea name="" id="message">

                        </textarea><br /><br /><br /><br />

                        <input type="submit" value="Submit" id='submit_button'/>

                    </form>
                </div> 

                <br /><br /><br />

                <Footer/>
            </div>
        </div>
    );
}

export default ContactUs
