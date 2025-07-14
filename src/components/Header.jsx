// src/components/Header.jsx
import React, { useState } from "react";
// Importe o ícone de menu do Lucide, se desejar substituir o ☰
import { Menu, X } from "lucide-react"; // X para o ícone de fechar

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {" "}
        {/* Alterado para justify-between */}
        {/* Agrupa a foto e o nome para que fiquem juntos à esquerda */}
        <div className="flex items-center space-x-3">
          {" "}
          {/* Adicionado um flex container para a foto e nome */}
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQFaBHwGxf05gg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661763856317?e=1758153600&v=beta&t=KGckaO-NKH4kf-DQd03SIV2kTVkIBluK7PEajJY5B4c"
            alt="Giovanni Donati" // Adicionei um alt text para acessibilidade
            className="w-12 h-12 rounded-full object-cover" // Adicionado object-cover para melhor visualização
          />
          <div className="text-2xl font-bold text-gray-900">
            Giovanni Donati
          </div>
        </div>
        {/* Botão do menu hamburguer para mobile, agora à direita devido ao justify-between */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none p-2" // Adicionado padding para melhor clique
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"} // Atualizado aria-label
        >
          {/* Usando ícones Lucide para o menu */}
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        {/* Links de navegação (escondidos no mobile, visíveis no desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium" // Adicionado font-medium
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              href="#stacks"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Minhas Stacks
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu responsivo (aparece no mobile quando isOpen é true) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-2 space-y-3">
            {" "}
            {/* Aumentei o espaço vertical */}
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold" // Aumentei tamanho e peso da fonte
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#stacks"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold"
              >
                Minhas Stacks
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
