import AlbumFotos from './albumFotos.jsx';
import Layout from './layout.jsx';

function TelaAlbum() {
    return(
        <div className="pagina">
            <Layout />
            <h3 className="titulodois">Nossos Momentos 🩵</h3>
                <div className="cards-container">
                    <AlbumFotos casalfotos="fotos/Gloria3.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/Gloria6.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/agente.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/agente1.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/agente2.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/agente3.jpg"></AlbumFotos>
                    <AlbumFotos casalfotos="fotos/agente4.jpg"></AlbumFotos>
                </div>
        </div>
    )
}
export default TelaAlbum;