import wavesImage from '../images/waves.png';

const Landing = () => {
    return(
        <div className="landing">
            <img src={wavesImage} alt="" className='landing__image--1'/>
            <img src={wavesImage} alt="" className='landing__image--2'/>
            <img src={wavesImage} alt="" className='landing__image--3'/>
            <img src={wavesImage} alt="" className='landing__image--4'/>
            <h2 className="landing__name">LAURA PASCUAL</h2>
            <h1 className="landing__title">PORTFOLIO</h1>
            <h1 className="landing__title">PORTFOLIO</h1>
            <h1 className="landing__title--black">PORTFOLIO</h1>
            <h1 className="landing__title">PORTFOLIO</h1>
            <h1 className="landing__title">PORTFOLIO</h1>
            <i class="fa-solid fa-arrow-down"></i>
        </div>
    )
}

export default Landing;