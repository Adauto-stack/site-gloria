import './App.css'
import TelaInicial from './componentes/telainicial.jsx'
import FloatingHearts from './componentes/floatinghearts.jsx'
import Tela2 from './componentes/tela2.jsx'
// Importe apenas Routes e Route aqui
import { Routes, Route } from 'react-router-dom'

function App(){
  return(
    <>
      {/* Os corações ficam fora das Routes para aparecerem em tudo */}
      <FloatingHearts />

      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/tela2" element={<Tela2 />} />
      </Routes>
    </>
  )
}

export default App