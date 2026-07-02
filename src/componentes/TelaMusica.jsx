import PlayerCard from "./PlayerMusica";
import "/./src/estilos/tela2.css";
import Layout from "./layout.jsx";
import PlayerCard1 from "./PlayerMusica1";
import PlayerCard2 from "./PlayerMusica2";
import PlayerCard3 from "./PlayerMusica3";
import PlayerCard4 from "./PlayerMusica4.jsx";
function TelaMusica (){
    return(
        <div>
            <Layout />
            <div className="secao-musica">
                
                <h3 className="titulodois">Músicas que eu dedico pra você</h3>
                <PlayerCard />
                <PlayerCard1 />
                <PlayerCard2 />
                <PlayerCard3 />
                <PlayerCard4 />
                <PlayerCard5 />

            </div>
        </div>
    )
}
export default TelaMusica