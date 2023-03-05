import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>

                <h3 className="about__title">Experiencia</h3>
                <span className="about__subtitle">5 Meses de Estagio</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">Empresa Junior</h3>
                <span className="about__subtitle">Tech Lead</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>

                <h3 className="about__title">Suport</h3>
                <span className="about__subtitle">Online</span>
            </div>
        </div>
    )
}

export default Info