import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./Components/Menu";
import Rodape from "./Components/Rodape/idnex";
import PaginaPadrao from "Components/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/NaoEncontrado";

function App() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} /> 
        </Route>

          <Route path="/posts/:id" element={<Post />} /> 
          <Route path="*" element={<NaoEncontrado />} />
      </Routes>   

      <Rodape /> 
    </BrowserRouter>
  );
}

export default App;
