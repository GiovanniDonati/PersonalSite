import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 md:py-24 flex items-center justify-center min-h-[calc(100vh-6rem)]"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-12 px-4">
        <div className="flex-shrink-0">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQFaBHwGxf05gg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661763856317?e=1758153600&v=beta&t=KGckaO-NKH4kf-DQd03SIV2kTVkIBluK7PEajJY5B4c"
            alt="Giovanni Donati"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Olá, sou <span className="text-yellow-300">Giovanni Donati</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6">
            Software Developer | Backend Developer
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/GiovanniDonati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <Github size={36} className="text-white hover:text-yellow-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanni-donati-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <Linkedin
                size={36}
                className="text-white hover:text-yellow-300"
              />
            </a>
            <a
              href="mailto:grdonati99@gmail.com"
              aria-label="Email"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <Mail size={36} className="text-white hover:text-yellow-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
