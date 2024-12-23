import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <TechStack/>
      <Projects/>
      <Education/>
      <ContactMe/>
    </div>
  );
}

export default App;
