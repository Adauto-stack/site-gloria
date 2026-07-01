import PlayerCard from "./PlayerMusica";
import "/./src/estilos/tela2.css";
import Layout from "./layout.jsx";
function TelaMusica (){
    return(
        <div>
            <Layout />
            <div className="secao-musica">
                
                <h3 className="titulodois">Música que eu dedico pra você</h3>
                <PlayerCard />
            </div>
        </div>
    )
}
export default TelaMusica