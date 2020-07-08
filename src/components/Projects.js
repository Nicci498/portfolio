
    import React, {useState} from 'react';

    import ProjectsButton from './ProjectsButton';
    import ProjectsSection from './ProjectsSection';
    
    function Projects() {
    
        const [ showProjects, setShowProjects] = useState(false) 
        return (
          
            <div className="projects">
              {(!showProjects)?(
              <ProjectsButton setShowProjects={setShowProjects} />
              ):(  
              <ProjectsSection setShowProjects={setShowProjects} />  
              )}
            </div>   
        );
      }
      export default Projects;