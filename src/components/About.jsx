import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <motion.div className="work-item">
                <AboutMe />
            </motion.div>
        </div>
    );
};

export default About;
