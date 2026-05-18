import "/./src/estilos/albumFotos.css";

function AlbumFotos({casalfotos}) {
  return (
    <div className="albumcasal">
      <img src={casalfotos} alt="" className="fotos-casal"></img>
    </div>
  );
}
export default AlbumFotos;
