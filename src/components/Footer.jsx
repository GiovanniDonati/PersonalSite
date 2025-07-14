// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Giovanni Donati. Todos os direitos
          reservados.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/GiovanniDonati"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/giovanni-donati-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:grdonati99@gmail.com"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
