import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
    return (
        <motion.div
            className="experience-container"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}>
            <div className="experience-header">
                <p>12+ years of</p>
                <h2>Experience</h2>
            </div>
            <div className="experience-entry">
                <h2 className="experience-job-title">Sr. Software Developer</h2>
                <div className="experience-company-details">
                    <p className="experience-company-name">
                        Savitriya Technologies
                    </p>
                    <p className="experience-company-tenure">2021 - 2023</p>
                </div>
            </div>
            <div className="experience-entry">
                <h2 className="experience-job-title">Sr. Software Developer</h2>
                <div className="experience-company-details">
                    <p className="experience-company-name">
                        Accenture Solutions
                    </p>
                    <p className="experience-company-tenure">2017 - 2021</p>
                </div>
            </div>
            <div className="experience-entry">
                <h2 className="experience-job-title">WFM Analyst</h2>
                <div className="experience-company-details">
                    <p className="experience-company-name">Concentrix Daksh</p>
                    <p className="experience-company-tenure">2011 - 2017</p>
                </div>
            </div>
            <div className="experience-entry">
                <h2 className="experience-job-title">Data Analyst</h2>
                <div className="experience-company-details">
                    <p className="experience-company-name">Target Tek</p>
                    <p className="experience-company-tenure">2010 - 2011</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
