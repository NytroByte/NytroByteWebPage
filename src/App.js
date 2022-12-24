import About from "./about/About";
import Header from "./header/Header";
import LandingPage from "./landing_page/LandingPage"
import Projects from "./projects/Projects";
function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
