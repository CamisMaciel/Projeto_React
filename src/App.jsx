import  { Route, Routes} from "react-router-dom";
import Footer from "./components/footer/footer.jsx";
import Menu from "./components/menu/menu.jsx";
import Home from "./pages/home/home.jsx";
import Sobre from "./pages/sobre/sobre.jsx";
import Comentarios from "./pages/comentarios/comentarios.jsx";
import Contato from "./pages/contato/contato.jsx";

function App() {
  
  return (
    <div>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/sobre" element={<Sobre /> }/>
      <Route path="/comentarios" element={<Comentarios /> } />
      <Route path="/contato" element={<Contato /> }/>
    </Routes>
    <Footer/>
  </div>
       )
}

export default App
