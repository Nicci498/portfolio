import React from 'react';



function ContactButton({setShowContact}){
    return(
        <div className='contact-button'>
            <h3 onClick={() => setShowContact(true)}>Get in touch</h3>
        </div>
    )
}
export default ContactButton;