
const project= ({eachProject}) => {
    const technologies = eachProject.technologies.map((eachTechnology) => <p className='project__tecn'>{eachTechnology}</p>)

    return(
        <div className='project'>
            <img src={eachProject.image} alt="" className='project__image'/>
            <div className="project__row">
                <h4 className='project__title'>{eachProject.name.toUpperCase()}</h4>
                <div className="project__container">
                    <a href={eachProject.repo} Target="_blank"><i className="fa-brands fa-square-github project__icons"></i></a>
                    <a href={eachProject.demo} Target="_blank"><i class="fa-solid fa-arrow-up-right-from-square project__icons"></i></a>
                </div>
            </div>
            <div className="project__position">
                {technologies}
            </div>
        </div>
    )
}

export default project;