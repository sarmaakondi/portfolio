import ProfilePic from "../../public/ProfilePic.webp";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <div className="aboutme-header">
                <img className="aboutme-profile-pic" src={ProfilePic} />
                <h2>Sarma Akondi</h2>
            </div>
            <div>
                <p>
                    I love to build visually pleasing yet functional user
                    interfaces. I recently graduated from the &quot;Software
                    Engineering&quot; bootcamp at &quot;General Assembly&quot;.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
