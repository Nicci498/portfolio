import React, {useState} from 'react';

import AboutButton from './AboutButton';
import AboutSection from './AboutSection';

function About() {

    const [ showAbout, setShowAbout] = useState(false) 
    return (
      
        <div className="about">
          {(!showAbout)?(
          <AboutButton setShowAbout={setShowAbout} />
          ):(  
          <AboutSection setShowAbout={setShowAbout} />  
          )}
        </div>   
    );
  }
  export default About;