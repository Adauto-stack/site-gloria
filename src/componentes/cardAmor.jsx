import '/./src/estilos/cardAmor.css'

function CardAmor({imagem, texto, frase}){
    return(
        <div className="card-amor">
            <img src={imagem} alt="" className="imagem-amor" />
            <h4 className="texto-amor">{texto}</h4>
            <p className='texto-amor'>{frase}</p>
        </div>
    )
}
export default CardAmor;