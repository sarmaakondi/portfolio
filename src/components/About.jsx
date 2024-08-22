import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Social from "./Social";
import Skills from "./Skills";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <motion.div
                className="about-item"
                initial={{ x: 500, y: 250 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <AboutMe />
            </motion.div>
            <motion.div
                className="about-item"
                initial={{ x: -500, y: -50 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Social />
            </motion.div>
            <motion.div
                className="about-item-full"
                initial={{ y: 450 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Skills />
            </motion.div>
        </div>
    );
};

export default About;
