import React from "react";
// import Hero from "./Hero";
import "./Program.css";
import programData from "./ProgramData";
import RightArrow from "../assets/rightArrow.png";

const Program = () => {
  return (
    <div className="program" id="program">
      <div className="program-header">
        <span className="stroke-text"> Explore our</span>
        <span> program</span>
        <span className="stroke-text"> to shape you</span>
      </div>
      <div className="program-categories">
        {programData.map((program) => {
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span> {program.details}</span>
            <div className="join_now">
              <span>join now</span>
              <img src={RightArrow}></img>
            </div> 
         </div>;
           })} 
      </div>
    </div>
     
  );
};

export default Program;
