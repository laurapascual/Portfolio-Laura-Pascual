import en from '../images/reino-unido.png';
import es from '../images/espana.png';

const Menu = ({isMenuShown, handleClick}) => {
    return(
        <div className="menu" style={{
            opacity: !isMenuShown ? "0" : "1",
            transition: "all .3s",
            visibility: !isMenuShown ? "hidden" : "visible"
        }}>
            <a href="#/" className="menu__name">LAURA PASCUAL</a>
            <nav>
                <ul className="menu__list">
                    <a href="#aboutMe" className='menu__link'><li>ABOUT ME </li></a>|
                    <a href="#projects" className='menu__link'><li>PROJECTS </li></a>|
                    <a href="#contact" className='menu__link'><li>CONTACT </li></a>|
                    <button onClick={() => handleClick("en")}><img src={en} alt='Flag'/></button>
                    <button onClick={() => handleClick("es")}><img src={es} alt='Bandera'/></button>
                </ul>
                
            </nav>
        </div>
    )
}

export default Menu;