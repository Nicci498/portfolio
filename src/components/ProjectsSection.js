import React from 'react';



function ProjectsSection({setShowProjects}){
    return(
        <div className='projects-section'>
            <h3>Projects</h3>
            <h6 onClick={() => setShowProjects(false)}>Exit Projects</h6>
        </div>
    )
}
export default ProjectsSection;