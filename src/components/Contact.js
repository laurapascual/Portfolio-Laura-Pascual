import shape from '../images/shape.svg';

const contact= () => {
    return(
        <div className='contact' id="contact">
            <h4 className="contact__title">CONTACT</h4>
            <div className='contact__section'> 
                <h5 className='contact__subtitle'>REACH OUT!</h5>
                <img src={shape} alt="" className='contact__shape'/>
                <p className="contact__desc">To contact me you can do it through the following social networks or my email. I am always open to listen and receive feedback. Thank you!</p>
            </div>
            <div className='contact__section2'>
                <i class="fa-brands fa-github-alt"></i><a href="https://github.com/laurapascual" className="contact__rrss">github.com/laurapascual</a>
                <i class="fa-brands fa-linkedin-in"></i><a href="https://linkedin.com/in/laura-pascual-mateo/" className="contact__rrss">linkedin.com/in/laura-pascual-mateo/</a>
                <i class="fa-regular fa-envelope"></i><a href="mailto:laurapascualmateo@gmail.com" className="contact__rrss">laurapascualmateo@gmail.com</a>
            </div>
        </div>
    )
}

export default contact;