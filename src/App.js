import About from "./about/About";
import Header from "./header/Header";
import LandingPage from "./landing_page/LandingPage"
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div style={{opacity: 0}} animate={{
      opacity: 1, transition: {duration: 1.2}
    }}>
      <div>
        <Header/>
        <LandingPage/>
        <About/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </motion.div>
  );
}

export default App;
