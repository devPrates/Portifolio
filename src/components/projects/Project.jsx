import React, { useState } from "react";
import "./project.css"

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
                        <i className="bx bx-code-curly project__icon"></i> Backend
                    </div>
                </div>

                <div className="project__sections">
                    <div className={ToggleState === 1 ? "project__content card__container project__content-active" : "project__content"}>
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

                        




                    </div>


                    {/*================= FRONTEND ========================================*/}
                    <div className={ToggleState === 2 ? "project__content project__content-active" : "project__content"}>
                        <div>bbbbbbbbbbbbbb</div>
                    </div>





                    {/*================= BACKEND ========================================*/}
                    <div className={ToggleState === 3 ? "project__content project__content-active" : "project__content"}>
                        <div>cccccccccccccc</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
