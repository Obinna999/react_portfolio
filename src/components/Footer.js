import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';



const Footer = () => {


return (
  <footer className=" text-white">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/obinna.thepaecemaker/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/Obs67012539" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/the_hobes/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/obinna-mbalisike-334875102/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/Obinna999?tab=projects" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;
