import { motion } from "framer-motion";
import Experience from "./Experience";
import Resume from "./Resume";
import Project from "./Project";
import ExpenseTrackerImage from "../../public/ExpenseTracker.webp";
import WorldOfWordsImage from "../../public/WorldOfWords.webp";
import EchoImage from "../../public/Echo.webp";
import "./Work.css";

const projectDetails = {
    expenseTracker: {
        name: "Expense Tracker",
        image: ExpenseTrackerImage,
        tech: ["HTML", "CSS", "JavaScript", "EJS", "MongoDB"],
    },
    worldOfWords: {
        name: "World of Words",
        image: WorldOfWordsImage,
        tech: ["React", "Express", "CSS", "Framer Motion", "MongoDB"],
    },
    echo: {
        name: "Echo",
        image: EchoImage,
        tech: ["React", "CSS", "Django", "PostgreSQL"],
    },
};

const Work = () => {
    return (
        <div className="work-container">
            <motion.div
                className="work-item"
                initial={{ opacity: 0, x: 500, y: 250 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Experience />
                <motion.div
                    initial={{ opacity: 0, x: 250, y: 350 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.worldOfWords} />
                </motion.div>
            </motion.div>
            <motion.div
                className="work-item"
                initial={{ opacity: 0, x: -500, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <Resume />
                <motion.div
                    initial={{ opacity: 0, x: -250, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.expenseTracker} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -350, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <Project project={projectDetails.echo} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Work;
