import "./Project.css";

const Job = ({ project }) => {
    return (
        <div className="project-container">
            <img className="project-image" src={project.image} alt="" />
            <h2 className="project-name">{project.name}</h2>
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
