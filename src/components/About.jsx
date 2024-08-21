import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Social from "./Social";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <motion.div
                className="work-item"
                initial={{ opacity: 0, x: 500, y: 250 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <AboutMe />
            </motion.div>
            <motion.div
                className="work-item"
                initial={{ opacity: 0, x: -500, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Social />
            </motion.div>
        </div>
    );
};

export default About;
