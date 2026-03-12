import CardAmor from "./cardAmor.jsx";
import PlayerCard from "./PlayerMusica.jsx";
import TempoJuntos from "./TempoJuntos.jsx";
import CartaAranha from "./CardAranha.jsx";
import '/./src/estilos/tela2.css'
function Tela2(){
    return(
        <div>
            <h2 className="titulodois">Essas são as coisas que eu amo em você</h2>
            <div className="cards-container">
                <CardAmor imagem="/fotos/Gloria1.jpg" texto="Seu sorriso" frase="Seu sorriso me desmonta inteiro" />
                <CardAmor imagem="/fotos/Gloria2.jpg" texto="Seu olhar" frase="Você pode até preferir ter nascido com a cor de outros olhos, mas a cor dos seus olhos são meus favoritos  " />
                <CardAmor imagem="/fotos/Gloria3.jpg" texto="Sua companhia " frase="Eu amo estar ao seu lado e passar o tempo com você" />
                <CardAmor imagem="/fotos/Gloria4.jpg" texto="Seu cheiro" frase="Amo sentir seu cheiro que fica impregnado na minha farda" />
                <CardAmor imagem="/fotos/Gloria5.jpg" texto="Sua voz" frase="Amo ouvir sua voz, falando sobre seu dia" />
                <CardAmor imagem="/fotos/Gloria6.jpg" texto="Tudo" frase="Amo tudo em você, até seu jeito palmeirense🙄"/>

            </div>
            <div className="secao-musica">
                <h3 className="titulodois">Música que eu dedico pra você</h3>
                <PlayerCard />
            </div>
            <TempoJuntos />
            <h3 className="titulodois">Clique aqui para ver uma supresa</h3>
            <CartaAranha />
            
        </div>
    )
}
export default Tela2; 