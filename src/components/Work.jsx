import Experience from "./Experience";
import Resume from "./Resume";
import Project from "./Project";
import ExpenseTrackerImage from "../../public/ExpenseTracker.webp";
import "./Work.css";

const projectDetails = {
    expenseTracker: {
        name: "Expense Tracker",
        image: ExpenseTrackerImage,
        tech: ["HTML", "CSS", "JavaScript", "EJS", "MongoDB"],
    },
};

const Work = () => {
    return (
        <div className="work-container">
            <div className="work-item">
                <Experience />
            </div>
            <div className="work-item">
                <Resume />
                <Project project={projectDetails.expenseTracker} />
            </div>
        </div>
    );
};

export default Work;
