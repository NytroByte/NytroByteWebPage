import About from "./about/About";
import Header from "./header/Header";
import LandingPage from "./landing_page/LandingPage"
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
