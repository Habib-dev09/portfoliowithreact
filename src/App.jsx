import "./App.css";
import Project from "./projects/Project";
import Skills from "./skills/Skills";
import Hero from "./sections/Hero/Hero";
import Contact from "./contact/Contactme"
import Footer from "./footer/Footer";

function App() {
  return (
    <> 
      <Hero />
      <Project />
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
