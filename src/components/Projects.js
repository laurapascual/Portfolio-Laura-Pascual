import Project from './Project';

const Projects= () => {
    return(
        <div className='projects' id='projects'>
            <h3 className="projects__title">PROJECTS</h3>
            <div className='projects__div'>
                <Project></Project>
                <Project></Project>
            </div>
        </div>
    )
}

export default Projects;