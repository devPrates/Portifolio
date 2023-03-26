import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">DevPrates</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#sobre" className="footer__link">Sobre</a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">Portifolio</a>
                    </li>

                    <li>
                        <a href="#contato" className="footer__link">Contato</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/gprates404" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.github.com/devPrates" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/devPrates" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <samp className="footer__copy">&#169; DevPrates. TODOS OS DIREITOS RESERVADOS</samp>
            </div>
        </footer>
    )
}

export default Footer