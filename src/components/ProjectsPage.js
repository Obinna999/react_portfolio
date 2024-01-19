import React from "react";
import './Projects.css';

const projects = [
  {
    title: "Film Flix",
    description: "Command line python application that manages a film database. In this app, I've used Python and MySQL",
    iframeSrc: "https://replit.com/@obinnambalisike/W4C11THOB?embed=true",
    buttonLink: "https://replit.com/@obinnambalisike/W4C11THOB?embed=true",
  },
  {
    title: "Weather App",
    description: "Weather application. I've used Javascript to get the data from an API. I've used Javascript, CSS and HTML and Bootstrap.",
    iframeSrc: "https://whaether-app.vercel.app/",
    buttonLink: "https://whaether-app.vercel.app/",
  },
  {
    title: "Best Wines E-commerce",
    description: "E-commerce web site where you can buy wine. I've used Javascript, CSS and Html and Bootstrap.",
    iframeSrc: "https://best-wines-e-commerce.vercel.app/",
    buttonLink: "https://best-wines-e-commerce.vercel.app/",
  },
  {
    title: "Table Boking System",
    description: "Application table booking .User-friendly platform allows you to effortlessly reserve, cancel, and view table bookings.",
    iframeSrc: "https://flask-todo-list-dm48ix64n-obinna999.vercel.app",
    buttonLink: "https://flask-todo-list-dm48ix64n-obinna999.vercel.app",
  },
  // Add more
]; 


const ProjectsPage = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card anim">
          <iframe title={project.title} src={project.iframeSrc} className="imcard"></iframe>
          <div className="cardText">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.buttonLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Check it out!
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default ProjectsPage;