
const Menu = ({isMenuShown}) => {
    console.log({isMenuShown})
    return(
        <div className="menu" style={{
            opacity: !isMenuShown ? "0" : "1",
            transition: "all .3s",
            visibility: !isMenuShown ? "hidden" : "visible"
        }}>
            <a href="/" className="menu__name">LAURA PASCUAL</a>
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