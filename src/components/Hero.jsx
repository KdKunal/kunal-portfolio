import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-200 to-purple-300">
      <img
        src={profileImg}
        alt="Profile"
        className="w-49 h-48 mx-auto mb-4 shadow-lg"
      />
      <h2 className="text-4xl font-bold mb-4">
        <TypeAnimation
          sequence={[
            'Java Backend Developer',
            2000,
            'Spring Boot Enthusiast',
            2000,
            'Experience in BFSI',
            2000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </h2>
      <p className="text-lg">
        Building scalable systems & APIs with Java and Spring Boot. Scroll down to know more about me.☺️
      </p>
      <div className="mt-6 space-x-4">
        <a href="#projects" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Projects</a>
        <a href="#contact" className="border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;