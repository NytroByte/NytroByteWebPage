import About from "./about/About";
import Header from "./header/Header";
import LandingPage from "./landing_page/LandingPage"
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import { motion } from "framer-motion";
import Loading from "./loadingScreen/Loading";

function App() {
  return (
    <motion.div>
      <Loading/>
      <motion.div className="global" style={{opacity: 0, overflow: "hidden"}} animate={{
        opacity: 1, overflow: "visible",  transition: {duration: 1.2, delay: 5.6}
      }}>
        <div>
          <Header/>
          <LandingPage/>
          <div className="globalWrapper">
            <About/>
            <Projects/>
          </div>
          <div className="globalWrapper custom">
            <Contacts/>
          </div>
          <Footer/>
        </div>
      </motion.div>
    </motion.div>

  );
}

export default App;
