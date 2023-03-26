import React, { useState } from "react";
import "./qualification.css"

const Qualification = () =>{
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="formacao">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha carreira proficional</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={ToggleState === 1 ?
                         "qualification__button qualification__active button--flex" :
                          "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educação
                    </div>

                    <div className={ToggleState === 2 ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experiencia
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={ToggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
                                <span className="qualification__subtitle">IFMS - Campus Naviraí</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Cursando
                                </div>  
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Ensino Médio</h3>
                                <span className="qualification__subtitle">IFMS - Campus Naviraí</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2019
                                </div>  
                            </div>
                        </div>
                    </div>

                    <div  className={ToggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Auxiliar Adm</h3>
                                <span className="qualification__subtitle">GINE-EAD</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Abr - 2022
                                </div>  
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Social Media</h3>
                                <span className="qualification__subtitle">Desing de Qualidade</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Mai - 2022
                                </div>  
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Operador de computador</h3>
                                <span className="qualification__subtitle">GINE-EAD</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun - 2022
                                </div>  
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification