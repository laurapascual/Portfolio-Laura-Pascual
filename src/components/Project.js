import cover from '../images/TURQUIA.PNG';

const project= () => {
    return(
        <div className='project'>
            <img src={cover} alt="" className='project__image'/>
            <h4 className='project__title'>PROYECTO 1</h4>
            <i className="fa-brands fa-square-github"></i>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <ul> 
                <li className='project__tecn'>React</li>
                <li className='project__tecn'>Javascript</li>
                <li className='project__tecn'>Node JS</li>
            </ul>
        </div>
    )
}

export default project;