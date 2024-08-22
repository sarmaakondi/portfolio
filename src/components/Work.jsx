import { motion } from "framer-motion";
import Experience from "./Experience";
import Resume from "./Resume";
import Project from "./Project";
import projectDetails from "../projects";
import "./Work.css";

const Work = () => {
    return (
        <div className="work-container">
            <motion.div
                className="work-item"
                initial={{ x: 500, y: 250 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Experience />
                <motion.div
                    initial={{ x: 250, y: 350 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.worldOfWords} />
                </motion.div>
                <motion.div
                    initial={{ x: -350, y: -50 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.knowNative} />
                </motion.div>
            </motion.div>
            <motion.div
                className="work-item"
                initial={{ x: -500, y: -50 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Resume />
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
                    <Project project={projectDetails.echo} />
                </motion.div>
                <motion.div
                    initial={{ x: 150, y: 250 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.steampocalypse} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Work;
