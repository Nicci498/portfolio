import React from 'react';



function AboutButton({setShowAbout, setShowTitle}){
    return(
        <div className='about-button'>
            <h3 onClick={() => setShowAbout(true)}>About</h3>
        </div>
    )
}
export default AboutButton;