import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="p-8 max-w-4xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/KdKunal" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/kunal-dubey-277444177/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className="mt-4">Email: kdkunaldubey@gmail.com</p>
    </section>
  );
};

export default Contact;