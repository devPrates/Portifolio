import React, { useState } from "react";
import "./project.css"
import ui01 from "../../assets/Banner.png";

const Project = () => {
    const [ToggleState, setToggleState] = useState(1);
    const [modalState, setModalState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    const modalTab = (index) => {
        setModalState(index)
    }
    return (
        <section className="project section" id="project">
            <h2 className="section__title">Projetos</h2>
            <span className="section__subtitle">Meus Projetos e Trabalhos</span>

            <div className="project__container container">
                <div className="project__tabs">
                    <div className={ToggleState === 1 ?
                        "project__button project__active button--flex" :
                        "project__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="bx bx-grid-alt project__icon"></i> UI/UX
                    </div>

                    <div className={ToggleState === 2 ? "project__button project__active button--flex"
                        : "project__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="bx bx-code-alt project__icon"></i> Frontend
                    </div>

                    <div className={ToggleState === 3 ? "project__button project__active button--flex"
                        : "project__button button--flex"} onClick={() => toggleTab(3)}>
                        <i className="bx bx-code-block project__icon"></i> Backend
                    </div>
                </div>

                <div className="project__sections">
                    <div className={ToggleState === 1 ? "project__content card__container project__content-active" : "project__content"}>    
                        <div class="card">
                            <div class="card-image"></div>
                            <div class="category"> Figma </div>
                            <div class="heading"> <p>Desing Software Garçon Virtual</p>
                            <a href="#"><button class="cta">
                                <span>Ver Mais</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button></a>

                            <div class="author"> By <span class="name">devPrates</span> 15/02/23</div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-image"></div>
                            <div class="category"> Figma </div>
                            <div class="heading"> <p>Desing site Magic Gathering</p>
                            <a href="#"><button class="cta">
                                <span>Ver Mais</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button></a>

                            <div class="author"> By <span class="name">devPrates</span> 24/03/23</div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-image"></div>
                            <div class="category"> Figma </div>
                            <div class="heading"> <p>Desing landing page JBL</p>
                            <a href="#"><button class="cta">
                                <span>Ver Mais</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button></a>

                            <div class="author"> By <span class="name">devPrates</span> 22/03/23</div>
                            </div>
                        </div>
                            
                    </div>        





                    {/*================= FRONTEND ========================================*/}
                    <div className={ToggleState === 2 ? "project__content card__container project__content-active" : "project__content"}>
                        <div class="card__front">
                            <div className="conteudo__header">
                            <div class="circles__front"> 
                                <div class="c"></div>
                                <div class="c"></div>
                                <div class="c"></div>
                            </div>

                            <div class="browser">
                                <div class="chevrons">
                                    <svg viewBox="0 0 20 20" height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                                        <path transform="translate(6.25 3.75)" d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z" id="Fill"></path>
                                    </svg>
                                    <svg viewBox="0 0 20 20" height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                                        <path transform="translate(6.625 3.75)" d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z" id="Fill"></path>
                                    </svg>
                                </div>
                                <div class="search-bar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.89" height="7.887" viewBox="0 0 16.89 16.887">
                                    <path id="Fill" d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z" transform="translate(0.003 0)"></path>
                                    </svg>

                                    devPrates.io
                                    <div>
                                    </div>

                                </div>
                            </div>
                            </div>

                            <div className="conteudo__front">
                            <h3 className="front__title">Meu Portifólio</h3>
                                    <p className="front__description">Projeto feito por mim mesmo com as tecnologias Vite | React com finalidade de divulgar meus trabalhos e projetos e também facilitar o contato.</p>
                            </div>

                            <div className="front__buttons">
                                <a className="front__button" onClick={() => modalTab(1)}>Ler Mais</a>
                                <a href="https://github.com/devPrates/Portifolio" className="front__button" target="_blank">GitHub</a>
                                <a href="https://github.com/devPrates/Portifolio" className="front__button" target="_blank">Demo</a>
                            </div>

                                <div className={modalState === 1 ? "modal active-modal" : "modal"}>
                                    <div className="modal__content">
                                        <i onClick={() => modalTab(0)} className="uil uil-times modal__close"></i>

                                        <h3 className="modal__title">Meu Portifólio</h3>
                                        <p className="modal__description">Projeto feito por mim mesmo com as tecnologias Vite | React com finalidade de divulgar meus trabalhos e projetos e também facilitar o contato.</p>

                                        <ul className="modal__services grid">
                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Vite</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">React</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Git</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Vercel</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">API email</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>


                        <div class="card__front">
                            <div className="conteudo__header">
                            <div class="circles__front"> 
                                <div class="c"></div>
                                <div class="c"></div>
                                <div class="c"></div>
                            </div>

                            <div class="browser">
                                <div class="chevrons">
                                    <svg viewBox="0 0 20 20" height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                                        <path transform="translate(6.25 3.75)" d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z" id="Fill"></path>
                                    </svg>
                                    <svg viewBox="0 0 20 20" height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                                        <path transform="translate(6.625 3.75)" d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z" id="Fill"></path>
                                    </svg>
                                </div>
                                <div class="search-bar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.89" height="7.887" viewBox="0 0 16.89 16.887">
                                    <path id="Fill" d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z" transform="translate(0.003 0)"></path>
                                    </svg>

                                    devPrates.io
                                    <div>
                                    </div>

                                </div>
                            </div>
                            </div>

                            <div className="conteudo__front">
                            <h3 className="front__title">Site 
                            Magic</h3>
                                    <p className="front__description">Projeto feito em aula na disciplina de desenvolvimento web com as tecnologias HTML | CSS com objetivo de treinar layouts flexbox.</p>
                            </div>

                            <div className="front__buttons">
                                <a className="front__button" onClick={() => modalTab(2)}>Ler Mais</a>
                                <a href="https://github.com/devPrates/Portifolio" className="front__button" target="_blank">GitHub</a>
                                <a href="https://github.com/devPrates/Portifolio" className="front__button" target="_blank">Demo</a>
                            </div>

                                <div className={modalState === 2 ? "modal active-modal" : "modal"}>
                                    <div className="modal__content">
                                        <i onClick={() => modalTab(0)} className="uil uil-times modal__close"></i>

                                        <h3 className="modal__title">Site Magic</h3>
                                        <p className="modal__description">Projeto feito em aula na disciplina de desenvolvimento web com as tecnologias HTML | CSS com objetivo de treinar layouts flexbox.</p>

                                        <ul className="modal__services grid">
                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">HTML</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">CSS</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Box-Model</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">FlexBox</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">TAGS Semânticas</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>



                    </div>





                    {/*================= BACKEND ========================================*/}
                    <div className={ToggleState === 3 ? "project__content card__container project__content-active" : "project__content"}>
                        <div class="back__container">
                            <div class="container_terminal"></div>
                            <div class="terminal_toolbar">
                                <div class="butt">
                                    <button class="back__btn btn-color"></button>
                                    <button class="back__btn"></button>
                                    <button class="back__btn"></button>
                                </div>
                                <p class="user">Prates@admin: ~</p>
                            </div>
                            <div class="terminal_body">
                                <div class="terminal_promt">
                                    <span class="terminal_user">Prates@admin:</span>
                                    <span class="terminal_location">~</span>
                                    <span class="terminal_bling">$ Construindo...</span>
                                    <span class="terminal_cursor"></span>
                                </div>
                            </div>
                        </div>










                    </div>






                </div>
            </div>
        </section>
    )
}

export default Project
