import About from "./about/About";
import Header from "./header/Header";
import LandingPage from "./landing_page/LandingPage"
function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <About/>
    </div>
  );
}

export default App;
