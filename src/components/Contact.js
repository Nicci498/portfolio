import React, {useState} from 'react';

import ContactButton from './ContactButton';
import ContactSection from './ContactSection';

function Contact() {

    const [ showContact, setShowContact] = useState(false) 
    return (
      
        <div className="contact">
          {(!showContact)?(
          <ContactButton setShowContact={setShowContact} />
          ):(  
          <ContactSection setShowContact={setShowContact} />  
          )}
        </div>   
    );
  }
  export default Contact;