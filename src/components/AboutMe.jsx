import ProfilePic from "../assets/ProfilePic.webp";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <div className="aboutme-header">
                <img
                    className="aboutme-profile-pic"
                    src={ProfilePic}
                    alt="profile picture"
                />
                <h2>Sarma Akondi</h2>
            </div>
            <div>
                <p className="aboutme-summary">
                    I love to build visually pleasing yet functional user
                    interfaces. I recently graduated from the &quot;Software
                    Engineering&quot; bootcamp at &quot;General Assembly&quot;.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
