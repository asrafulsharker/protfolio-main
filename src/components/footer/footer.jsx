import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nirob</h1>

                <ul className="footer__list">
                    {/* <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#protfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li> */}



                    <li >
                            <a href="#home" className="footer__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                        </li>

                        <li >
                            <a href="#about" className="footer__link">
                                <i className="uil uil-user nav__icon"></i> About
                                </a>
                        </li >

                        <li className='rmv' >
                            <a href="#publications" className="footer__link">
                                <i className="uil uil-briefcase-alt nav__icon rmv"></i> Publications
                                </a>
                        </li>

                        <li  className='rmv'>
                            <a href="#collaboration" className="footer__link">
                                <i className="uil uil-file-alt nav__icon rmv"></i> Collaborations
                                </a>
                        </li>

                        <li  >
                            <a href="#qualifications" className="footer__link">
                                <i className="uil uil-briefcase-alt nav__icon "></i> Qualifications
                                </a>
                        </li>

                        <li >
                            <a href="#protfolio" className="footer__link">
                                <i className="uil uil-scenery nav__icon"></i> Protfolio
                                </a>
                        </li>

                        <li >
                            <a href="#contact" className="footer__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                                </a>
                        </li>

                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/md.nirob.asraful" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href=" https://instagram.com/asraful.sharker?igshid=ZmZhODViOGI=" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href=" https://twitter.com/ " className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className='footer__copy'>
                    &#169; All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;
