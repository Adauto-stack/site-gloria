import { Link, Outlet } from "react-router-dom";
import "/./src/estilos/layout.css";

function Layout() {
  return (
    <>
      <header className="navbar">
        <Link to="/tela2">Início</Link>
        <Link to="/TelaCronometro">Cronômetro</Link>
        <Link to="/TelaMusica">Músicas</Link>
        <Link to="/TelaAlbum">Álbum</Link>
      </header>

      <Outlet />
    </>
  );
}

export default Layout;