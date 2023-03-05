import React, { useState } from "react";
import "../portifolio/portifolio.css";

const Portifolio = () => {
    const [ToggleState, setToggleState] = useState(1);
    const [modalState, setModalState] = useState(0);

    const modalTab = (index) => {
        setModalState(index)
    }

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="portifolio section" id="portifolio">
            <h2 className="section__title">Portifolio</h2>
            <span className="section__subtitle">Meus Projetos e Trabalhos</span>

            <div className="portifolio__container container">
                <div className="portifolio__tabs">
                    <div className={ToggleState === 1 ?
                        "portifolio__button portifolio__active button--flex" :
                        "portifolio__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap portifolio__icon"></i> UI/UX
                    </div>

                    <div className={ToggleState === 2 ? "portifolio__button portifolio__active button--flex"
                        : "portifolio__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt portifolio__icon"></i> Frontend
                    </div>

                    <div className={ToggleState === 3 ? "portifolio__button portifolio__active button--flex"
                        : "portifolio__button button--flex"} onClick={() => toggleTab(3)}>
                        <i className="uil uil-briefcase-alt portifolio__icon"></i> Backend
                    </div>
                </div>
                <div className="portifolio__sections">
                    <div className={ToggleState === 1 ? "portifolio__content card__container portifolio__content-active" : "portifolio__content"}>


                        <div class="card">
                            <div class="card__box">
                                <div class="card__content">
                                    <h2>01</h2>
                                    <h3>Projeto 01</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                    <div className="buttons__card">
                                        <a className="card-button" onClick={() => modalTab(1)}>Ler Mais</a>
                                        <a href="#" className="card-button">GitHub</a>
                                        <a href="#" className="card-button">Demo</a>
                                    </div>
                                </div>
                            </div>

                            <div className={modalState === 1 ? "modal active-modal" : "modal"}>
                                <div className="modal__content">
                                    <i onClick={() => modalTab(0)} className="uil uil-times modal__close"></i>

                                    <h3 className="modal__title">Project nane</h3>
                                    <p className="modal__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Neque cumque nam sit ipsam alias, perspiciatis accusantium blanditiis.</p>

                                    <ul className="modal__services grid">
                                        <li className="modal__service">
                                            <i className="uil uil-check-circle modal__icon"></i>
                                            <p className="modal__info">Aqui vai o texto do modal!</p>
                                        </li>

                                        <li className="modal__service">
                                            <i className="uil uil-check-circle modal__icon"></i>
                                            <p className="modal__info">Aqui vai o texto do modal!</p>
                                        </li>

                                        <li className="modal__service">
                                            <i className="uil uil-check-circle modal__icon"></i>
                                            <p className="modal__info">Aqui vai o texto do modal!</p>
                                        </li>

                                        <li className="modal__service">
                                            <i className="uil uil-check-circle modal__icon"></i>
                                            <p className="modal__info">Aqui vai o texto do modal!</p>
                                        </li>

                                        <li className="modal__service">
                                            <i className="uil uil-check-circle modal__icon"></i>
                                            <p className="modal__info">Aqui vai o texto do modal!</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>














                        <div class="card">
                            <div class="card__box">
                                <div class="card__content">
                                    <h2>02</h2>
                                    <h3>Card Two</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>















                        <div class="card">
                            <div class="card__box">
                                <div class="card__content">
                                    <h2>03</h2>
                                    <h3>Card Three</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>





                    </div>



























                    {/*================= FRONTEND ========================================*/}
                    <div className={ToggleState === 2 ? "portifolio__content portifolio__content-active" : "portifolio__content"}>
                        <div className="portifolio__data">
                            <div className="card__content">
                                <div className="card__img">
                                    <img src={headerImg} />
                                </div>
                                <div className="card__body">
                                    <h3 className="card__title">Project name</h3>
                                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint repellendus consectetur animi, vitae et odio!</p>
                                </div>
                                <div className="card__buttons">
                                    <a className="card-button" onClick={() => modalTab(4)}>Ler mais</a>
                                    <a href="#" className="card-button">Demo</a>
                                    <a href="#" className="card-button">GitHub</a>
                                </div>


                                <div className={modalState === 4 ? "modal active-modal" : "modal"}>
                                    <div className="modal__content">
                                        <i onClick={() => modalTab(0)} className="uil uil-times modal__close"></i>

                                        <h3 className="modal__title">Project nane</h3>
                                        <p className="modal__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Neque cumque nam sit ipsam alias, perspiciatis accusantium blanditiis.</p>

                                        <ul className="modal__services grid">
                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>






























                    {/*================= BACKEND ========================================*/}
                    <div className={ToggleState === 3 ? "portifolio__content portifolio__content-active" : "portifolio__content"}>
                        <div className="portifolio__data">
                            <div className="card__content">
                                <div className="card__img">
                                    <img src={headerImg} />
                                </div>
                                <div className="card__body">
                                    <h3 className="card__title">Project</h3>
                                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint repellendus consectetur animi, vitae et odio!</p>
                                </div>
                                <div className="card__buttons">
                                    <a className="card-button" onClick={() => modalTab(4)}>Ler mais</a>
                                    <a href="#" className="card-button">Demo</a>
                                    <a href="#" className="card-button">GitHub</a>
                                </div>


                                <div className={modalState === 4 ? "modal active-modal" : "modal"}>
                                    <div className="modal__content">
                                        <i onClick={() => modalTab(0)} className="uil uil-times modal__close"></i>

                                        <h3 className="modal__title">Project nane</h3>
                                        <p className="modal__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Neque cumque nam sit ipsam alias, perspiciatis accusantium blanditiis.</p>

                                        <ul className="modal__services grid">
                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>

                                            <li className="modal__service">
                                                <i className="uil uil-check-circle modal__icon"></i>
                                                <p className="modal__info">Aqui vai o texto do modal!</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portifolio