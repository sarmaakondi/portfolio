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
                <div className="skills-icon-container">
                    <li>
                        <StackIcon name="html5" />
                    </li>
                    <li>
                        <StackIcon name="css3" />
                    </li>
                    <li>
                        <StackIcon name="tailwindcss" />
                    </li>
                    <li>
                        <StackIcon name="bootstrap5" />
                    </li>
                    <li>
                        <StackIcon name="js" />
                    </li>
                    <li>
                        <StackIcon name="reactjs" />
                    </li>
                    <li>
                        <StackIcon name="nodejs" />
                    </li>
                </div>
                <div className="skills-icon-container">
                    <li>
                        <StackIcon name="python" />
                    </li>
                    <li>
                        <StackIcon name="django" />
                    </li>
                    <li>
                        <StackIcon name="flask" />
                    </li>
                    <li>
                        <StackIcon name="mongodb" />
                    </li>
                    <li>
                        <StackIcon name="mongoose" />
                    </li>
                    <li>
                        <StackIcon name="postgresql" />
                    </li>
                    <li>
                        <StackIcon name="mysql" />
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Skills;
