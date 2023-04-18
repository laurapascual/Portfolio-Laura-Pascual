import Laura from '../images/laura.png';
import shape from '../images/blueShape.svg';

const AboutMe = () => {
    return(
        <div className='aboutMe' id='aboutMe'>
            <h3 className='aboutMe__title'>ABOUT ME</h3>
            <div className='aboutMe__container'>
                <img src={shape} alt="" className='aboutMe__shape'/>
                <img src={Laura} alt="" className='aboutMe__image'/>
            </div>
            <p className='aboutMe__text'>Hello, my name is Laura, and I am a 27-year-old recent graduate from a web programming bootcamp. After studying journalism, I realized it was not my passion, and I worked in different sectors, including commerce, catering, and customer service. Eventually, I found my way into the world of telecommunications, where I was given the opportunity to take courses related to IT. It was there that I discovered my passion for web development, leading me to enroll in a coding bootcamp.
            <br/><br/>I am excited to pursue a career as a Full Stack Developer, combining my strong communication skills and attention to detail with my technical abilities. My background in customer service and degree in Journalism has taught me the importance of understanding clients' needs and delivering effective solutions. I am committed to staying up-to-date with the latest technologies and techniques in the field.
            <br/><br/>Thank you for considering me for any opportunities that may be available. Please do not hesitate to contact me if you have any questions or would like to discuss potential collaborations.
            </p>
        </div>
    )
}

export default AboutMe;