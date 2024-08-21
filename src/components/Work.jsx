import Experience from "./Experience";
import Resume from "./Resume";
import "./Work.css";

const Work = () => {
    return (
        <div className="work-container">
            <div className="work-item">
                <Experience />
            </div>
            <div className="work-item">
                <Resume />
            </div>
        </div>
    );
};

export default Work;
