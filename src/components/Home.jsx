import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Reveal } from "react-reveal";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <Reveal effect="fadeInUp">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#28c7fa]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Olvine George
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        Hello and welcome! I'm Olvine George, a passionate Software developer with a flair for turning lines of code into captivating visual journeys. With a heart that beats for clean and immersive user interfaces, I've embarked on a creative odyssey to bring digital dreams to life. This portfolio is a glimpse into my world, where pixels and imagination intertwine to build seamless, user-centric experiences. Join me as I explore the art of frontend development and share my journey through code and creativity.
        </p>
        <div>
          <button className="text-white hover:text-green-400 group border-2 px-6 py-3 border-blue-500 my-2 flex items-center  hover:border-[#28c7fa]">
           <Link to ='work' smooth={true}>View Work</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      </Reveal>
    </div>
  );
};

export default Home;
