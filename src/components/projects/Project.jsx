import post from "./post.json"
import Post from "./Post"
import "./project.css"
import imagem from "../../assets/card.png"
import React, { useState } from 'react';

const Project = () => {

    return (
        <section className="project section" id="project">
            <h2 className="section__title">Projetos</h2>
            <span className="section__subtitle">Meus Projetos e Trabalhos</span>

            <div className="project__container container">
                {post.map((item) => (
                    <section className="post__card" key={item.id}>
                        <div className="post_imagem">
                            <img src={`../src/assets/${item.imagem}`} alt="" />
                        </div>
                        <div className="post_content">
                            <div>
                                <h1 className="post_content-titulo">{item.Titulo}</h1>

                            </div>
                            <div className="post_content-description">
                                <p>{item.Descricao}</p>
                            </div>
                            <div className="post_content-data">
                                <span className="post_content-subtitle">{item.Data}</span>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    )
}

export default Project
