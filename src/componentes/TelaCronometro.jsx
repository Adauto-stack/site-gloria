import TempoJuntos from "./TempoJuntos.jsx";
import TempoNamoro from "./TempoNamoro.jsx";
import Layout from "./layout.jsx";
import "/./src/estilos/responsivo.css";
function TelaCronometro(){
    return(
        <div className="pagina">
            <Layout />
            <h2 className="titulodois">Nosso tempo juntos</h2>
            <TempoJuntos />
            <h2 className="titulodois">Nosso tempo de namoro</h2>
            <TempoNamoro />
        </div>
    )
}
export default TelaCronometro