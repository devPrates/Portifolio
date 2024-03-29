import post from "./post.json"
import "./project.css"

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
                                <span className="post_content-subtitle">{item.Data}</span>
                            </div>
                            <div className="post_content-description">
                                <p>{item.Descricao}</p>
                            </div>
                            <div className="post_botoes">
                                <a className="post_botoes-item" href="#">Ver Mais</a>
                                <a className="post_botoes-item" href="#">Github</a>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    )
}

export default Project
