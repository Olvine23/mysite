/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import me from "../assets/ollynobg.png";
 

const About = () => {
  return (
    <div name="about" className="w-full sm:h-screen bg-[#0a192f] text-gray-300">

      <div className="flex flex-col justify-center items-center w-full h-90">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#28c7fa]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-4">
          
          <div className="  text-4xl font-bold">
          <img   src={me} / >
         
            <p className="mt-10 text-[#8892b0]">
              Olvine here 👋. <br/> These are some of the interesting facts about me.</p>

          </div>
          <div className="mt-20">
            
        <p>Welcome to my digital realm, where innovation meets design, and code weaves the fabric of imagination. <br /> I am Olvine George, a frontend developer on a relentless quest to infuse life and elegance into the digital landscape. With a passion for creating visually stunning and user-centric experiences, I invite you to join me on a journey through my portfolio.

Here, you'll discover a collection of projects that reflect my dedication to merging technology with aesthetics.
<br /> 
<p>
  <br />
From crafting responsive layouts that adapt seamlessly to any screen, to choreographing interactive elements that engage and inspire, each project embodies my dedication to pushing the boundaries of what's possible in the world of frontend development.
</p>

 .</p>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
