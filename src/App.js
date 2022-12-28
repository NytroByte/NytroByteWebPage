import About from "./about/About";
import Header from "./header/Header";
import LandingPage from "./landing_page/LandingPage"
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <div className={`App ${loading ? "" : "visible"}`}>
      <div>
        <Header/>
        <LandingPage/>
        <About/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
