import whiteWaves from '../images/waveShape.svg';


const Menu = () => {
    return(
        <div className="menu">
            <img src={whiteWaves} alt="" className='menu__image'/>
            <p className="menu__name">LAURA PASCUAL</p>
            <nav>
                <ul className="menu__list">
                    <a href="#aboutMe" className='menu__link'><li>ABOUT ME </li></a>|
                    <a href="#projects" className='menu__link'><li>PROJECTS </li></a>|
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;