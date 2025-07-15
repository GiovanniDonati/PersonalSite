// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mim</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Olá, me chamo Giovanni, atuo como desenvolvedor de software,
          abrangendo todo o ciclo de vida, desde o levantamento de requisitos
          até a implementação e posteriores atualizações de sistemas. Atualmente
          sou responsável por softwares de gestão de estoque (WMS), gestão de
          carregamento e controle de capacidade e demanda (CxD).
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Estou sempre em busca de amplificar meus conhecimentos em tecnologias,
          participando de eventos, fóruns e comunidades de tecnologia.
        </p>
      </div>
    </section>
  );
};

export default About;
