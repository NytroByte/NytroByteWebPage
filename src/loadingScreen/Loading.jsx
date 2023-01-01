import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
function Loading() {
    return (
        <motion.div className="LoadingContainer">
            <motion.div className="welcomeContainer">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Welcome to NytroByte!')
                        .pauseFor(250)
                        .deleteAll()
                        .start();
                    }}
                />
            </motion.div>
        </motion.div>
    )
}
export default Loading;