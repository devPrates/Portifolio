import React, { useState } from "react";
import "./qualification.css"

const Qualification = () =>{
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="formacao">
            <h2 className="section__title">Formação</h2>
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
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Cursos
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
                                <h3 className="qualification__title">React JS</h3>
                                <span className="qualification__subtitle">Alura - <a className="qualification__link" href="https://cursos.alura.com.br/degree/certificate/b4c8709b-cf2a-4391-a15a-986396b62e7c?lang=pt_BR">Ver Certificado</a></span>
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
                                <h3 className="qualification__title">TypeScript</h3>
                                <span className="qualification__subtitle">Alura - <a className="qualification__link" href="https://cursos.alura.com.br/degree/certificate/f032b5ab-fc58-4d4b-a726-ec1e6fe45fc9?lang=pt_BR">Ver Certificado</a></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Out - 2023
                                </div>  
                            </div>
                        </div>
                        
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bootstrap 5</h3>
                                <span className="qualification__subtitle">Alura - <a className="qualification__link" href="https://cursos.alura.com.br/degree/certificate/e78f1767-631e-44e4-8afb-52dbeda889fe?lang=pt_BR">Ver Certificado</a></span>
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
                                <h3 className="qualification__title">Spring Boot</h3>
                                <span className="qualification__subtitle">IFMS</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Mar - 2022
                                </div>  
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Montagem e Manutenção de Computadores</h3>
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