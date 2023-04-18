import Laura from '../images/lauraImage.png';
import shape from '../images/blueShape.svg';

const AboutMe = () => {
    return(
        <div className='aboutMe' id='aboutMe'>
            <h3 className='aboutMe__title'>ABOUT ME</h3>
            <div className='aboutMe__container'>
                <img src={shape} alt="" className='aboutMe__shape'/>
                <img src={Laura} alt="" className='aboutMe__image'/>
            </div>
            <p className='aboutMe__text'>Hello, my name is Laura, I am 27 years old. I studied journalism but, after an internship at the university, I realized that it was not what I liked. Since then I have worked in different sectors (commerce, catering, customer service...) until I arrived in the world of telecommunications. 
            <br/>Although my position was not qualified, they gave me the opportunity to take different courses related to IT.  That's where my idea came from to continue training in that field and sign up for a web programming bootcamp. I can say that it has been a great experience and that it has reaffirmed my idea of wanting to dedicate myself to it. 
            <br/>As a recent graduate from a coding bootcamp, I am eager to start my career as a Full Stack Developer. With a background in customer service and a degree in Journalism, I bring strong communication skills and attention to detail to my work. I am committed to staying up-to-date with the latest technologies and techniques in the field to provide the best possible solutions for clients.
            </p>
        </div>
    )
}

export default AboutMe;