import ProfilePictureWide from "../assets/profilePictureWide.webp";
import ProfilePictureMedium from "../assets/profilePictureMedium.webp";
import ProfilePictureTablet from "../assets/profilePictureTablet.webp";
import ProfilePictureMobile from "../assets/profilePictureMobile.webp";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <div className="aboutme-header">
                <img
                    className="aboutme-profile-pic"
                    src={ProfilePictureMobile}
                    srcSet={`
                        ${ProfilePictureWide} 1280w,
                        ${ProfilePictureMedium} 900w,
                        ${ProfilePictureTablet} 700w,
                        ${ProfilePictureMobile} 360w
                    `}
                    sizes="(max-width: 360px) 360px,
                           (max-width: 699px) 700px,
                           (max-width: 899px) 900px,
                           1280px"
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
