import { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import download from "react-useanimations/lib/download";
import explore from "react-useanimations/lib/explore";
import MyResume from "../assets/SarmaAkondiResume.pdf";
import "./Resume.css";

const Resume = () => {
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);
    const [isExploreHovered, setIsExploreHovered] = useState(false);
    const [size, setSize] = useState(window.innerWidth <= 698 ? 28 : 40);

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

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth <= 698 ? 28 : 40);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                        size={size}
                        strokeColor="#4a4a4a"
                        autoplay={isDownloadHovered}
                    />
                </a>
                <a
                    href="https://drive.google.com/file/d/1wLqOgMxjb0snuY9nNVB8jaHqCyHgLLTO/view?usp=sharing"
                    target="_blank"
                    className="resume-explore"
                    onMouseEnter={handleExploreHoverEnter}
                    onMouseLeave={handleExploreHoverLeave}>
                    <UseAnimations
                        key={isExploreHovered === true}
                        animation={explore}
                        size={size}
                        strokeColor="#4a4a4a"
                        autoplay={isExploreHovered}
                    />
                </a>
            </div>
        </div>
    );
};

export default Resume;
