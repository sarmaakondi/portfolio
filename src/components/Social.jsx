import { useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";
import "./Social.css";

const Social = () => {
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [isMailHovered, setIsMailHovered] = useState(false);

    const handleGithubHoverEnter = () => {
        setIsGithubHovered(true);
    };

    const handleGithubHoverLeave = () => {
        setIsGithubHovered(false);
    };

    const handleLinkedInHoverEnter = () => {
        setIsLinkedInHovered(true);
    };

    const handleLinkedInHoverLeave = () => {
        setIsLinkedInHovered(false);
    };

    const handleMailHoverEnter = () => {
        setIsMailHovered(true);
    };

    const handleMailHoverLeave = () => {
        setIsMailHovered(false);
    };

    return (
        <div className="social-container">
            <h2>Get in touch</h2>
            <div className="social-links-container">
                <div
                    onMouseEnter={handleGithubHoverEnter}
                    onMouseLeave={handleGithubHoverLeave}>
                    <UseAnimations
                        key={isGithubHovered === true}
                        animation={github}
                        size={100}
                        strokeColor="#181717"
                        autoplay={isGithubHovered}
                    />
                </div>
                <div
                    onMouseEnter={handleLinkedInHoverEnter}
                    onMouseLeave={handleLinkedInHoverLeave}>
                    <UseAnimations
                        key={isLinkedInHovered === true}
                        animation={linkedin}
                        size={100}
                        strokeColor="#0077B5"
                        autoplay={isLinkedInHovered}
                    />
                </div>
                <div
                    onMouseEnter={handleMailHoverEnter}
                    onMouseLeave={handleMailHoverLeave}>
                    <UseAnimations
                        key={isMailHovered === true}
                        animation={mail}
                        size={100}
                        strokeColor="#D93025"
                        autoplay={isMailHovered}
                    />
                </div>
            </div>
        </div>
    );
};

export default Social;
