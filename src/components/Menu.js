import whiteWaves from '../images/waveShape.svg';


const Menu = () => {
    return(
        <div className="menu">
            <img src={whiteWaves} alt="" className='menu__image'/>
            <p className="menu__name">LAURA PASCUAL</p>
            <nav>
                <ul className="menu__list">
                    <li>ABOUT ME |</li>
                    <li>PROJECTS |</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;