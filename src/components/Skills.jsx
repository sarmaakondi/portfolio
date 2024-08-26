import StackIcon from "tech-stack-icons";
import HeartImage from "../assets/heart.png";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>
                Tech I <img className="skills-emoji" src={HeartImage} alt="" />{" "}
                and work with
            </h2>

            <ul className="skills-list">
                <li>
                    <div className="skills-icon-container">
                        <StackIcon name="html5" />
                        <StackIcon name="css3" />
                        <StackIcon name="tailwindcss" />
                        <StackIcon name="bootstrap5" />
                        <StackIcon name="js" />
                        <StackIcon name="reactjs" />
                        <StackIcon name="nodejs" />
                    </div>
                </li>
                <li>
                    <div className="skills-icon-container">
                        <StackIcon name="python" />
                        <StackIcon name="django" />
                        <StackIcon name="flask" />
                        <StackIcon name="mongodb" />
                        <StackIcon name="mongoose" />
                        <StackIcon name="postgresql" />
                        <StackIcon name="mysql" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Skills;
