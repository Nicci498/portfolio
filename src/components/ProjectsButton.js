import React from 'react';



function ProjectsButton({setShowProjects}){
    return(
        <div className='project-button'>
            <h3 onClick={() => setShowProjects(true)}>My work</h3>
        </div>
    )
}
export default ProjectsButton;