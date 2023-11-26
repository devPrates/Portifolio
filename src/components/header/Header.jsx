import React, { useState } from "react";
import "./header.css"

const Header = () => {

        /*=============== Change Baclgroud Header ===============*/
        window.addEventListener("scroll", function () {
            const header = document.querySelector(".header");
            if (this.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        })


        /*=============== Toggle Menu ===============*/
        const[toggle, showMenu] = useState(false);
        const[activeNav, setActiveNav] = useState("#home");
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">&lt;/ DevPrates &gt;</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> HOME
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#sobre"  onClick={() => setActiveNav('#sobre')} 
                            className={activeNav === "#sobre" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> SOBRE
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills"  onClick={() => setActiveNav('#skills')} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> SKILLS
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#formacao"  onClick={() => setActiveNav('#formacao')} 
                            className={activeNav === "#formacao" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase nav__icon"></i> FORMAÇÃO
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#project"  onClick={() => setActiveNav('#project')} 
                            className={activeNav === "#project" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> PORTIFÓLIO
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contato"  onClick={() => setActiveNav('#contato')} 
                            className={activeNav === "#contato" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> CONTATO
                            </a>
                        </li>
                    </ul> 

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}
export default Header
