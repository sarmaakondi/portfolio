import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Resume from "./Resume";
import Social from "./Social";
import Project from "./Project";
import projectDetails from "../projects";
import Skills from "./Skills";
import { motion } from "framer-motion";
import "./All.css";

const All = () => {
    return (
        <div className="all-container">
            <motion.div
                className="all-item"
                initial={{ x: 500, y: 250 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <AboutMe />
                <motion.div
                    initial={{ x: -350, y: -50 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.echo} />
                </motion.div>
                <motion.div
                    initial={{ x: -250, y: -50 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.expenseTracker} />
                </motion.div>
                <motion.div
                    initial={{ x: -350, y: -50 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.knowNative} />
                </motion.div>
            </motion.div>
            <motion.div
                className="all-item"
                initial={{ x: -500, y: -50 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Resume />
                <motion.div
                    initial={{ x: 500, y: 250 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Experience />
                </motion.div>
                <motion.div
                    initial={{ x: 250, y: 350 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.worldOfWords} />
                </motion.div>
                <motion.div
                    initial={{ x: 150, y: 250 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.steampocalypse} />
                </motion.div>
                <motion.div
                    initial={{ x: -500, y: -50 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Social />
                </motion.div>
            </motion.div>
            <motion.div
                className="all-item-full"
                initial={{ opacity: 0, y: 450 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Skills />
            </motion.div>
        </div>
    );
};

export default All;
