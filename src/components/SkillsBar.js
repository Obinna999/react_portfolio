import React from "react";

const skillsData = [
    { iconClass: "fab fa-css3-alt fa-3x text-primary", text: "CSS" },
    { iconClass: "fab fa-js fa-3x text-warning", text: "JavaScript" },
    { iconClass: "fas fa-database fa-3x text-info", text: "MySQL" },
    { iconClass: "fab fa-python fa-3x text-success", text: "Python" },
    { iconClass: "fab fa-html5 fa-3x text-danger", text: "HTML" },
    { iconClass: "fab fa-flask fa-3x text-secondary", text: "Flask" },
    { iconClass: "fab fa-bootstrap fa-3x text-primary", text: "Bootstrap" },
    { iconClass: "fab fa-react fa-3x text-primary", text: "React" },
];

const SkillsBar = () => {
    return (
        <div className="container-fluid py-4">
            <h2>My skills</h2>
            <div className="row">
                {skillsData.map((skill, index) => (
                    <div key={index} className="col">
                        <i className={skill.iconClass}></i>
                        <p>{skill.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsBar;
