import en from '../images/reino-unido.png';
import es from '../images/espana.png';

const Menu = ({isMenuShown, handleClick, t}) => {
    return(
        <div className="menu" style={{
            opacity: !isMenuShown ? "0" : "1",
            transition: "all .3s",
            visibility: !isMenuShown ? "hidden" : "visible"
        }}>
            <a href="#/" className="menu__name">LAURA PASCUAL</a>
            <nav>
                <ul className="menu__list">
                    <a href="#aboutMe" className='menu__link'><li>{t("aboutMe.title")} </li></a>|
                    <a href="#projects" className='menu__link'><li>{t("projects.title")}</li></a>|
                    <a href="#contact" className='menu__link'><li>{t("contact.title")}</li></a>|
                    <button className='menu__btn' onClick={() => handleClick("en")}><img src={en} alt='Flag'/></button>
                    <button className='menu__btn' onClick={() => handleClick("es")}><img src={es} alt='Bandera' className='menu__btn--es'/></button>
                </ul>
                
            </nav>
        </div>
    )
}

export default Menu;