import Experience from "./Experience";
import Resume from "./Resume";
import Project from "./Project";
import ExpenseTrackerImage from "../../public/ExpenseTracker.webp";
import WorldOfWordsImage from "../../public/WorldOfWords.webp";
import EchoImage from "../../public/Echo.webp";
import "./Work.css";

const projectDetails = {
    expenseTracker: {
        name: "Expense Tracker",
        image: ExpenseTrackerImage,
        tech: ["HTML", "CSS", "JavaScript", "EJS", "MongoDB"],
    },
    worldOfWords: {
        name: "World of Words",
        image: WorldOfWordsImage,
        tech: ["React", "Express", "CSS", "Framer Motion", "MongoDB"],
    },
    echo: {
        name: "Echo",
        image: EchoImage,
        tech: ["React", "CSS", "Django", "PostgreSQL"],
    },
};

const Work = () => {
    return (
        <div className="work-container">
            <div className="work-item">
                <Experience />
                <Project project={projectDetails.worldOfWords} />
            </div>
            <div className="work-item">
                <Resume />
                <Project project={projectDetails.expenseTracker} />
                <Project project={projectDetails.echo} />
            </div>
        </div>
    );
};

export default Work;
