import wavesImage from '../images/waves.png';

const Landing = ({handleMenuShown, isMenuShown}) => {
    return(
        <div className="landing" id='/' style={{
            opacity: isMenuShown ? "0" : "1",
            transition: "all .3s",
            visibility: isMenuShown ? "hidden" : "visible"
        }}>
            <img src={wavesImage} alt="" className='landing__image--1'/>
            <img src={wavesImage} alt="" className='landing__image--2'/>
            <img src={wavesImage} alt="" className='landing__image--3'/>
            <h2 className="landing__name">LAURA PASCUAL</h2>
            <h1 className="landing__title">PORTFOLIO</h1>
            <h1 className="landing__title">PORTFOLIO</h1>
            <h1 className="landing__title--black">PORTFOLIO</h1>
            <h1 className="landing__title">PORTFOLIO</h1>
            <h1 className="landing__title">PORTFOLIO</h1>
            <a href="#aboutMe" className='landing__link' onClick={handleMenuShown}><i className="fa-solid fa-arrow-down"></i></a>
        </div>
    )
}

export default Landing;