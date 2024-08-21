import UseAnimations from "react-useanimations";
import explore from "react-useanimations/lib/explore";
import "./Project.css";
import { useState } from "react";

const Job = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="project-container">
            <img className="project-image" src={project.image} alt="" />
            <div className="project-name-container">
                <h2 className="project-name">{project.name}</h2>
                <div
                    className="project-explore"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <UseAnimations
                        key={isHovered === true}
                        animation={explore}
                        size={40}
                        strokeColor="gray"
                        autoplay={isHovered}
                    />
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
