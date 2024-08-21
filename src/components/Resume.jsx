import { useState } from "react";
import UseAnimations from "react-useanimations";
import download from "react-useanimations/lib/download";
import explore from "react-useanimations/lib/explore";
import MyResume from "../assets/SarmaAkondiResume.pdf";
import "./Resume.css";

const Resume = () => {
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);
    const [isExploreHovered, setIsExploreHovered] = useState(false);

    const handleDownloadHoverEnter = () => {
        setIsDownloadHovered(true);
    };

    const handleDownloadHoverLeave = () => {
        setIsDownloadHovered(false);
    };

    const handleExploreHoverEnter = () => {
        setIsExploreHovered(true);
    };

    const handleExploreHoverLeave = () => {
        setIsExploreHovered(false);
    };

    return (
        <div className="resume-container">
            <div className="resume-header">
                <p>2024 CV</p>
                <h2>Resume</h2>
            </div>
            <div className="resume-controls-container">
                <a
                    href={MyResume}
                    download
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
                </a>
                <div
                    className="resume-explore"
                    onMouseEnter={handleExploreHoverEnter}
                    onMouseLeave={handleExploreHoverLeave}>
                    <UseAnimations
                        key={isExploreHovered === true}
                        animation={explore}
                        size={40}
                        strokeColor="#4a4a4a"
                        autoplay={isExploreHovered}
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;
