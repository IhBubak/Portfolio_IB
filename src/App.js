import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projekte from "./components/Projekte";
import Kontakt from "./components/Kontakt";
import { useState } from "react";

function App() {

  document.title = "Portfolio I.B."

  const[darkMode, setDarkMode]= useState(false)
  const changeDarkMode=()=>{
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <Navbar darkMode={darkMode} changeDarkMode={changeDarkMode}/>
      <Home darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projekte darkMode={darkMode}/>
      <Kontakt darkMode={darkMode}/>
    </div>
  );
}

export default App;
