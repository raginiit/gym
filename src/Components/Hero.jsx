import React from "react";
import Header from "./Header/Header";
import heart from "../assets/heart.png";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import calories from "../assets//calories.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text"> Shape</span>
            <span> Yours</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>Makes fitness is your favroite habbit</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span> expert coaches</span>
          </div>
          <div>
            <span>+974</span>
            <span> fitness program</span>
          </div>
          <div>
            <span>+1000</span>
            <span> members joined</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn"> Get started</button>
          <button className="btn">Learn more </button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">join now</button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span> Heart rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className="hero_image" />
        <img src={hero_image_back} alt="" className="hero_image_back" />
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>calories burned</span>

            <span> 220 k cal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
