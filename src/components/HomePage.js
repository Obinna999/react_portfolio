import ImageComponent from "./ImageComponent";
import React from "react";
import './HomePage.css'
import SkillsBar from "./SkillsBar";


const HomePage = () => {
  const title = " Hi my name is Obinna";
  const par = 'Junior full stack Developer';
  const par2 = 'Passionate about programming and technology, I\'m here to turn ideas into reality.';
  return ( 
    <div>
    <div className="container" id="main-container">
      <div className="intro">
        <h1 className="anim">{title}</h1>
        <h2 className="anim">{par}</h2>
        <p className="anim">{par2}</p>
      </div>
      <div className="profile-image anim">
        <ImageComponent />
      </div>
    </div>
    <SkillsBar />
  </div>
   );
}
 
export default HomePage;