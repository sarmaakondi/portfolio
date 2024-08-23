import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import explore from "react-useanimations/lib/explore";
import "./Project.css";
import { useEffect, useState } from "react";

const Job = ({ project }) => {
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isExploreHovered, setIsExploreHovered] = useState(false);
    const [size, setSize] = useState(window.innerWidth <= 698 ? 28 : 40);

    const handleGithubEnter = () => {
        setIsGithubHovered(true);
    };

    const handleGithubLeave = () => {
        setIsGithubHovered(false);
    };

    const handleExploreEnter = () => {
        setIsExploreHovered(true);
    };

    const handleExploreLeave = () => {
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
        <div className="project-container">
            <a
                href={project.liveURL}
                target="_blank"
                className="project-image-link">
                <img
                    className="project-image"
                    src={project.image}
                    alt="project screenshot"
                />
            </a>
            <div className="project-name-container">
                <h2 className="project-name">{project.name}</h2>
                <div className="project-links-container">
                    <a
                        href={project.githubURL}
                        target="_blank"
                        className="project-github"
                        onMouseEnter={handleGithubEnter}
                        onMouseLeave={handleGithubLeave}>
                        <UseAnimations
                            key={isGithubHovered === true}
                            animation={github}
                            size={size}
                            strokeColor="#4a4a4a"
                            autoplay={isGithubHovered}
                        />
                    </a>
                    <a
                        href={project.liveURL}
                        target="_blank"
                        className="project-explore"
                        onMouseEnter={handleExploreEnter}
                        onMouseLeave={handleExploreLeave}>
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
            <ul className="technology-container">
                {project.tech.map((tech, index) => (
                    <li key={index} className="technology-name">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Job;
