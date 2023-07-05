import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>

                <h3 className="about__title">Experiencia programação</h3>
                <span className="about__subtitle">6 Meses de Estágio</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">Empresa Junior</h3>
                <span className="about__subtitle">Tech Lead</span>
            </div>

            <div className="about__box">
                <i className="bx bx-code-block about__icon"></i>

                <h3 className="about__title">Maratonas de Programação</h3>
                <span className="about__subtitle">3 participações</span>
            </div>
        </div>
    )
}

export default Info