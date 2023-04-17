
const project= ({eachProject}) => {
    const technologies = eachProject.technologies.map((eachTechnology) => <p className='project__tecn'>{eachTechnology}</p>)

    return(
        <div className='project'>
            <img src={eachProject.image} alt="" className='project__image'/>
            <h4 className='project__title'>{eachProject.name}</h4>
            <a href={eachProject.repo} Target="_blank"><i className="fa-brands fa-square-github"></i></a>
            <a href={eachProject.demo} Target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            {technologies}
        </div>
    )
}

export default project;