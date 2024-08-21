import { useState } from "react";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import download from "react-useanimations/lib/download";
import visibility from "react-useanimations/lib/visibility";
import "./Resume.css";

const Resume = () => {
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);
    const [isViewHovered, setIsViewHovered] = useState(false);

    const handleDownloadHoverEnter = () => {
        setIsDownloadHovered(true);
    };

    const handleDownloadHoverLeave = () => {
        setIsDownloadHovered(false);
    };

    const handleViewHoverEnter = () => {
        setIsViewHovered(true);
    };

    const handleViewHoverLeave = () => {
        setIsViewHovered(false);
    };

    return (
        <motion.div
            className="resume-container"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}>
            <div className="resume-header">
                <p>2024 CV</p>
                <h2>Resume</h2>
            </div>
            <div className="resume-controls-container">
                <div
                    className="resume-download"
                    onMouseEnter={handleDownloadHoverEnter}
                    onMouseLeave={handleDownloadHoverLeave}>
                    <UseAnimations
                        key={isDownloadHovered === true}
                        animation={download}
                        size={40}
                        strokeColor="gray"
                        autoplay={isDownloadHovered}
                    />
                </div>
                <div
                    className="resume-view"
                    onMouseEnter={handleViewHoverEnter}
                    onMouseLeave={handleViewHoverLeave}>
                    <UseAnimations
                        key={isViewHovered === true}
                        animation={visibility}
                        size={40}
                        strokeColor="gray"
                        autoplay={isViewHovered}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
