const contact= ({t}) => {
    return(
        <div className='contact' id="contact">
            <h4 className="contact__title">{t("titleContact")}</h4>
            <div className='contact__section'> 
                <p className="contact__desc">{t("contactDesc")}
                </p>
                <div className='contact__section2'>
                    <div className="contact__section2--container">
                        <i class="fa-brands fa-github-alt"></i><a href="https://github.com/laurapascual" className="contact__rrss">github.com/laurapascual</a>
                    </div>
                    <div className="contact__section2--container">
                        <i class="fa-brands fa-linkedin-in"></i><a href="https://linkedin.com/in/laura-pascual-mateo/" className="contact__rrss">linkedin.com/in/laura-pascual-mateo/</a>
                     </div>   
                    <div className="contact__section2--container">
                        <i class="fa-regular fa-envelope"></i><a href="mailto:laurapascualmateo@gmail.com" className="contact__rrss">laurapascualmateo@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact;