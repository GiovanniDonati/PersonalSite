// src/components/Projects.jsx
import React from "react";

const myProjects = [
  {
    title: "Nome do Projeto Incrível 1",
    description:
      "Este projeto é uma aplicação web full stack construída com React, Node.js e PostgreSQL. Possui autenticação de usuários e um sistema de gerenciamento de tarefas.",
    githubLink: "https://github.com/GiovanniDonati/nome-do-projeto-1",
    demoLink: "#", // Se tiver uma demo online
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "API RESTful com Python",
    description:
      "Uma API robusta desenvolvida em Python com Flask, ideal para gerenciar dados de produtos. Inclui testes unitários e documentação com Swagger.",
    githubLink: "https://github.com/GiovanniDonati/api-rest-python",
    demoLink: "#",
    tags: ["Python", "Flask", "SQLAlchemy", "REST API"],
  },
  {
    title: "Clone de UI com React e Tailwind",
    description:
      "Recriação de uma interface de usuário complexa utilizando React e Tailwind CSS, demonstrando habilidades em estilização avançada e componentes reutilizáveis.",
    githubLink: "https://github.com/GiovanniDonati/clone-ui-react-tailwind",
    demoLink: "#",
    tags: ["React", "Tailwind CSS", "UI/UX"],
  },
  // Adicione mais projetos com base no seu GitHub
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {myProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-102 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4 mt-auto pt-4 border-t border-gray-100">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300 text-sm font-semibold"
                >
                  Ver no GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold"
                  >
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="https://github.com/GiovanniDonati?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300"
          >
            Ver Mais Projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
