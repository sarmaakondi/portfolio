import HeartImage from "../assets/heart.png";
import "./Skills.css";

import HtmlImage from "../assets/html5.png";
import CssImage from "../assets/css3.png";
import TailwindcssImage from "../assets/tailwindcss.png";
import BootstrapImage from "../assets/bootstrap5.png";
import JsImage from "../assets/js.png";
import ReactjsImage from "../assets/reactjs.png";
import NodejsImage from "../assets/nodejs.png";
import PythonImage from "../assets/python.png";
import DjangoImage from "../assets/django.png";
import FlaskImage from "../assets/flask.png";
import MongodbImage from "../assets/mongodb.png";
import MongooseImage from "../assets/mongoose.png";
import PostgresqlImage from "../assets/postgresql.png";
import MysqlImage from "../assets/mysql.png";

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
                        <img
                            className="skill-icon"
                            src={HtmlImage}
                            alt="html icon image"
                        />
                        <img
                            className="skill-icon"
                            src={CssImage}
                            alt="css icon image"
                        />
                        <img
                            className="skill-icon"
                            src={TailwindcssImage}
                            alt="tailwind css icon image"
                        />
                        <img
                            className="skill-icon"
                            src={BootstrapImage}
                            alt="bootstrap icon image"
                        />
                        <img
                            className="skill-icon"
                            src={JsImage}
                            alt="javascript icon image"
                        />
                        <img
                            className="skill-icon"
                            src={ReactjsImage}
                            alt="react js icon image"
                        />
                        <img
                            className="skill-icon"
                            src={NodejsImage}
                            alt="node js icon image"
                        />
                    </div>
                </li>
                <li>
                    <div className="skills-icon-container">
                        <img
                            className="skill-icon"
                            src={PythonImage}
                            alt="python icon image"
                        />
                        <img
                            className="skill-icon"
                            src={DjangoImage}
                            alt="djano icon image"
                        />
                        <img
                            className="skill-icon"
                            src={FlaskImage}
                            alt="flask css icon image"
                        />
                        <img
                            className="skill-icon"
                            src={MongodbImage}
                            alt="mongodb icon image"
                        />
                        <img
                            className="skill-icon"
                            src={MongooseImage}
                            alt="mongoose icon image"
                        />
                        <img
                            className="skill-icon"
                            src={PostgresqlImage}
                            alt="postgresql js icon image"
                        />
                        <img
                            className="skill-icon"
                            src={MysqlImage}
                            alt="mysql js icon image"
                        />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Skills;
