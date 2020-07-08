import React from 'react';



function ContactSection({setShowContact}){
    return(
        <div className='contact-section'>
            <h3>Contact section booooiii</h3>
            <h6 onClick={() => setShowContact(false)}>Exit Contact</h6>
        </div>
    )
}
export default ContactSection;