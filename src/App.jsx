import './App.css'
import TelaInicial from './componentes/telainicial.jsx'
import FloatingHearts from './componentes/floatinghearts.jsx'
import Tela2 from './componentes/tela2.jsx'
// Importe apenas Routes e Route aqui
import { Routes, Route } from 'react-router-dom'
import Layout from './componentes/layout.jsx'
import TelaCronometro from './componentes/TelaCronometro.jsx'
import TelaMusica from './componentes/TelaMusica.jsx'
import TelaAlbum from './componentes/TelaAlbum.jsx'

function App(){
  return(
    <>
      {/* Os corações ficam fora das Routes para aparecerem em tudo */}
      <FloatingHearts />

      <Routes element={<Layout />}>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/tela2" element={<Tela2 />} />
        <Route path="/TelaCronometro" element={<TelaCronometro />} />
        <Route path="/TelaMusica" element={<TelaMusica />} />
        <Route path="/TelaAlbum" element={<TelaAlbum />} />
      </Routes>
    </>
  )
}

export default App