// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mim</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Sou Giovanni Donati, um desenvolvedor com paixão por criar soluções
          robustas e eficientes. Minha jornada na tecnologia me levou a explorar
          diversas áreas, desde o desenvolvimento web front-end e back-end até a
          automação e otimização de processos.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Com foco em aprendizagem contínua e resolução de problemas, estou
          sempre em busca de novos desafios que me permitam aplicar e expandir
          minhas habilidades. Acredito que a tecnologia tem o poder de
          transformar e simplificar o mundo, e sou motivado a contribuir para
          essa transformação.
        </p>
      </div>
    </section>
  );
};

export default About;
