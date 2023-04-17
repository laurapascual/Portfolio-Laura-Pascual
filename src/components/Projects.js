import Project from './Project';

const Projects= ({projectList}) => {
    const dataHtml = projectList.map((eachProject) => {
        return <Project eachProject={eachProject}></Project>
    })
    return(
        <div className='projects' id='projects'>
            <h3 className="projects__title">PROJECTS</h3>
            <div className='projects__div'>
                <ul>{dataHtml}</ul>
            </div>
        </div>
    )
}

export default Projects;