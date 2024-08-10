import React, { useState } from 'react';
import "./header.css";

const Header = () =>{
    const[Toggle, showMenu] =useState(false);

    return(
        <header className="header">
            <nav className="nav container">
                <a href='index.html' className='nav__logo'>Nirob</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                                </a>
                        </li>

                        <li className="nav__item">
                            <a href="#publications" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Publications
                                </a>
                        </li>

                        <li className="nav__item">
                            <a href="#collaboration" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Collaborations
                                </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualifications" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Qualifications
                                </a>
                        </li>

                        {/* <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Skills
                                </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#protfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Protfolio
                                </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                                </a>
                        </li>
                    </ul>
                    <i className='uil uil-times nav__close' onClick={() => showMenu (!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}
export default Header;