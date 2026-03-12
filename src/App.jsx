import './App.css'
import TelaInicial from './componentes/telainicial.jsx'; 
import FloatingHearts from './componentes/floatinghearts.jsx';
import ReactDOM from 'react-dom/client'
import Tela2 from './componentes/tela2.jsx';
import { Routes, Route } from 'react-router-dom';
function App(){
  return(
    <div>
      <FloatingHearts />
 
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/tela2" element={<Tela2 />} />
      </Routes>

      

    </div>
  )
}
export default App;