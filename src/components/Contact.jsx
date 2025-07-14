// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white px-4">
      <div className="container mx-auto text-center max-w-xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Entre em Contato
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Ficaria muito feliz em conversar sobre novas oportunidades, projetos
          ou apenas para trocar ideias! Sinta-se à vontade para me contatar
          através do meu e-mail ou conectar-se no LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:seu-email@example.com"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
          >
            Enviar Email
          </a>
          <a
            href="https://www.linkedin.com/in/giovanni-donati-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300 text-lg font-semibold"
          >
            Conectar no LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
