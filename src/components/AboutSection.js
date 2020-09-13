import React from 'react';



function AboutSection({setShowAbout}){
    return(
        <div className = 'about-section'>
            <h3 className = 'about-title'>Nicole White</h3>
            <p className = 'about'>I am a <span className = 'role'>Full Stack Web Developer</span> living in Hawaii with a passion for coding, traveling, reading, and great food. I finished the Full Stack Web Development Program at Lambda School in July of 2020. I also currently work for Lambda School as a TL for a fantastic team building a mobile first app to display earthquake data. I am looking forward to new and exciting adventures and learning and growth opportunities.</p>
            <h6 onClick={() => setShowAbout(false)}>Exit About</h6>
        </div>
    )
}
export default AboutSection;