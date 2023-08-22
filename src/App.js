import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projekte from "./components/Projekte";
import Kontakt from "./components/Kontakt";

function App() {

  document.title = "Portfolio I.B."

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projekte/>
      <Kontakt/>
    </div>
  );
}

export default App;
