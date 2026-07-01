import albumFotos from './AlbumFotos.jsx';
function Album() {
    return(
        <div>
            <h3 className="titulodois">Nossos Momentos 🩵</h3>
                <div className="cards-container">
                    <AlbumFotos casalfotos="fotos/Gloria3.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/Gloria6.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/agente.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/agente1.jpg"></AlbumFotos>
                </div>
        </div>
    )
}