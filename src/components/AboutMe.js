import Laura from '../images/laura.png';
import shape from '../images/blueShape.svg';

const AboutMe = ({t}) => {
    return(
        <div className='aboutMe' id='aboutMe'>
            <h3 className='aboutMe__title'>{t("titleAboutMe")}</h3>
            <div className='aboutMe__container'>
                <img src={shape} alt="" className='aboutMe__shape'/>
                <img src={Laura} alt="" className='aboutMe__image'/>
            </div>
            <p className='aboutMe__text'>{t("bio")}</p>
        </div>
    )
}

export default AboutMe;