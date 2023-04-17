import Laura from '../images/lauraImage.png';
import shape from '../images/blueShape.svg';

const AboutMe = () => {
    return(
        <div className='aboutMe' id='aboutMe'>
            <h3 className='aboutMe__title'>ABOUT ME</h3>
            <img src={shape} alt="" className='aboutMe__shape'/>
            <img src={Laura} alt="" className='aboutMe__image'/>
            <p className='aboutMe__text'>As a recent graduate from a coding bootcamp, I am eager to start my career as a Full Stack Developer. With a background in customer service and a degree in Journalism, I bring strong communication skills and attention to detail to my work. I am committed to staying up-to-date with the latest technologies and techniques in the field to provide the best possible solutions for clients.</p>
        </div>
    )
}

export default AboutMe;