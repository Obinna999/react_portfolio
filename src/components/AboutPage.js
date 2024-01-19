import React from 'react';
import ImageComponent from "./ImageComponent";
import SkillsBar from "./SkillsBar";
import './AboutPage.css';

const AboutPage = () => {
    const title = "About Me, I'm Obinna, a junior developer passionate about web development.";
    const title2 = 'Skills:';
    const par = ' I specialize in front-end (HTML, CSS, Bootstrap) and back-end (Python, JavaScript with Flask) development.';
    const title3 = 'Experience:';
    const par3 = "I've sharpened my skills through a coding bootcamp and software testing course.";
    const title4 = 'Passion:';
    const par4 = 'Challenges excite me; they are opportunities to learn and innovate.';
    const title5 = 'Future:';
    const par5 = 'Committed to lifelong learning, staying at the forefront of tech.';
    const par6 = "Thanks for visiting my portfolio. Explore my projects and reach out for collaboration. Together, we'll shape a brighter digital future!";

    return (
        <div className="about-container">
            <div className="card-body">
                <div className="container-fluid">
                    <div className="row">
                        {/* Colonna sinistra con il testo */}
                        <div className="col-md-6">
                            <div className="card-text anim text-left">
                                <p>{title}</p>
                                <p>{title2}{par}</p>
                                <p>{title3}{par3}</p>
                                <p>{title4}{par4}</p>
                                <p>{title5}{par5}</p>
                                <p>{par6}</p>
                            </div>
                        </div>
                        {/* Colonna destra con l'immagine */}
                        <div className="col-md-6">
                            <div className="profile-image anim mb-3">
                                <ImageComponent />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skill bar sotto */}
                <SkillsBar />
            </div>
        </div>
    );
};

export default AboutPage;
