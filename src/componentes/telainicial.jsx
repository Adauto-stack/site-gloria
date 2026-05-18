import '/./src/App.css'
import '/./src/estilos/telainicial.css'
import { Link } from 'react-router-dom';
function TelaInicial() {
    return(
        <div className="pagina-inicial">

            <div className="conteudo-inicial">

                <h1 className="titulo">
                    Para Glória 🩵
                </h1>

                <h3 className="subtitulo-central">
                    Você é o resultado das minhas orações
                </h3>

                <Link to="/tela2">
                    <button className="botao">
                        Continuar
                    </button>
                </Link>

            </div>
        </div>
    )
}
export default TelaInicial;