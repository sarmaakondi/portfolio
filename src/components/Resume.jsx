import { useState } from "react";
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
        <div className="resume-container">
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
                        strokeColor="#4a4a4a"
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
                        strokeColor="#4a4a4a"
                        autoplay={isViewHovered}
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;
