import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import explore from "react-useanimations/lib/explore";
import "./Project.css";
import { useState } from "react";

const Job = ({ project }) => {
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isExploreHovered, setIsExploreHovered] = useState(false);

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

    return (
        <div className="project-container">
            <img className="project-image" src={project.image} alt="" />
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
                            size={40}
                            strokeColor="#4a4a4a"
                            autoplay={isGithubHovered}
                        />
                    </a>
                    <a
                        href={project.liveURL}
                        target={project.liveURL !== "#" ? "_blank" : "_self"}
                        className="project-explore"
                        onMouseEnter={handleExploreEnter}
                        onMouseLeave={handleExploreLeave}>
                        <UseAnimations
                            key={isExploreHovered === true}
                            animation={explore}
                            size={40}
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
