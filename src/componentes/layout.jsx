import { Link, useLocation } from "react-router-dom";
import "/./src/estilos/layout.css";

function Layout() {

    const location = useLocation();

    return (

        <header className="layout">

            <h1 className="logo">
                🩵 Para Glória
            </h1>

            <nav className="menu">

                <Link
                    to="/tela2"
                    className={location.pathname === "/tela2" ? "ativo" : ""}
                >
                    ❤️ Nosso Início
                </Link>

                <Link
                    to="/TelaCronometro"
                    className={location.pathname === "/TelaCronometro" ? "ativo" : ""}
                >
                    ⏳ Nosso Tempo
                </Link>

                <Link
                    to="/TelaMusica"
                    className={location.pathname === "/TelaMusica" ? "ativo" : ""}
                >
                    🎵 Nossas Músicas
                </Link>

                <Link
                    to="/TelaAlbum"
                    className={location.pathname === "/TelaAlbum" ? "ativo" : ""}
                >
                    📸 Nossos Momentos
                </Link>

            </nav>

        </header>

    );

}

export default Layout;