import React from "react";
import '../components/hero.css';
import profile from "../components/profile.jpeg"; // add your image here

function Hero() {
  return (
    <div className="hero">
      
      <img src={profile} alt="profile" className="profile-img" />

      <h1>Hi, This is Ramani</h1>
      <p>Web Developer</p>

      <div className="links">
        <a href="https://github.com/ramaniguntha-jpg" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href="https://linkedin.com/in/ramani-guntha-a85421370" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

    </div>
  );
}
export default Hero;