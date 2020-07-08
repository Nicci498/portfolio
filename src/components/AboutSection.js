import React from 'react';



function AboutSection({setShowAbout}){
    return(
        <div className='about-section'>
            <h3>About section baby</h3>
            <h6 onClick={() => setShowAbout(false)}>Exit About</h6>
        </div>
    )
}
export default AboutSection;