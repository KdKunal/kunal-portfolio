import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Kunal Dubey</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 