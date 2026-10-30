import Layout from './layout.jsx';
import AlbumFotos from './albumFotos.jsx';
function FotosDela(){
    return(
        <div>
            <Layout></Layout>
            <h3 className="titulodois">Sou louco por você</h3>
            <h5 className="titulodois">Sou seu fã nº1 </h5>
            <div className="cards-container">
            <AlbumFotos casalfotos="fotos/Gloria1.jpg"/>
            <AlbumFotos casalfotos="fotos/Gloria2.jpg"/>
            <AlbumFotos casalfotos="fotos/Gloria4.jpg"/>
            <AlbumFotos casalfotos="fotos/Gloria5.jpg"/>
            <AlbumFotos casalfotos="fotos/Gdela.jpg"/>
            <AlbumFotos casalfotos="fotos/Gdela2.jpg"/>
            <AlbumFotos casalfotos="fotos/Gdela3.jpg"/>
            <AlbumFotos casalfotos="fotos/Gdela4.jpg"/>
            <AlbumFotos casalfotos="fotos/Gdela5.jpg"/>
            <AlbumFotos casalfotos="fotos/Gdela6.jpg"/>
            </div>
        </div>
    )
}
export default FotosDela