import Project from './Project';

const Projects= ({projectList, t}) => {
    const dataHtml = projectList.map((eachProject) => {
        return <Project eachProject={eachProject}></Project>
    })
    return(
        <div className='projects' id='projects'>
            <h3 className="projects__title">{t("titleProjects")}</h3>
            <ul className='projects__list'>{dataHtml}</ul>
        </div>
    )
}

export default Projects;