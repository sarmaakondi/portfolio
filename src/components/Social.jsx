import { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";
import "./Social.css";

const Social = () => {
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [isMailHovered, setIsMailHovered] = useState(false);
    const [size, setSize] = useState(window.innerWidth <= 698 ? 60 : 100);

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

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth <= 698 ? 60 : 100);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="social-container">
            <h2>Get in touch</h2>
            <div className="social-links-container">
                <a
                    href="https://github.com/sarmaakondi"
                    target="_blank"
                    onMouseEnter={handleGithubHoverEnter}
                    onMouseLeave={handleGithubHoverLeave}
                    aria-label="Open my GitHub profile">
                    <UseAnimations
                        key={isGithubHovered === true}
                        animation={github}
                        size={size}
                        strokeColor="#181717"
                        autoplay={isGithubHovered}
                        aria-hidden="true"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/sarmaakondi/"
                    target="_blank"
                    onMouseEnter={handleLinkedInHoverEnter}
                    onMouseLeave={handleLinkedInHoverLeave}
                    aria-label="Open my LinkedIn profile">
                    <UseAnimations
                        key={isLinkedInHovered === true}
                        animation={linkedin}
                        size={size}
                        strokeColor="#0077B5"
                        autoplay={isLinkedInHovered}
                        aria-hidden="true"
                    />
                </a>
                <a
                    href="mailto:sarmaakondivnm@gmail.com"
                    onMouseEnter={handleMailHoverEnter}
                    onMouseLeave={handleMailHoverLeave}
                    aria-label="Send me an email for queries">
                    <UseAnimations
                        key={isMailHovered === true}
                        animation={mail}
                        size={size}
                        strokeColor="#D93025"
                        autoplay={isMailHovered}
                        aria-hidden="true"
                    />
                </a>
            </div>
        </div>
    );
};

export default Social;
