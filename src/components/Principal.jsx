import {
  ArrowRightCircleIcon,
  FileText,
  GitBranch,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";

export const Principal = () => {
  const stacks = [
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "JavaScript",
    "TypeSript",
    "React",
    "Flutter",
    "Dart",
  ];
  const db = ["MySQL", "PostgreSQL", "SQLite", "MongoDB"];
  const tools = ["Linux", "Postman", "AWS", "VPS", "Docker", "Kubernates"];
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center lg:justify-center lg:pt-0 md:justify-start md:pt-20"
      style={{ backgroundImage: "url('./universe.jpg')" }}
    >
      <div className="rounded-xl shadow-xl min-h-[65vh] w-11/12 lg:w-2/3 lg:grid lg:grid-cols-9 space-x-1 max-md:mt-4">
        <div
          className="col-span-6 min-h-full w-full bg-black/10 rounded-2xl text-white border-white/20 border"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div
            className="w-full lg:h-1/4 h-24 md:h-36 rounded-t-2xl p-2 border-b border-b-white bg-cover bg-top"
            style={{
              backgroundImage: "url('./background.png')",
            }}
          />
          <img
            className="rounded-3xl w-24 h-28 -mt-14 ml-12 border-white border object-cover object-center"
            src="./perfil.jpeg"
          />
          <div className="mt-2 ml-8 mr-4">
            <div className="flex justify-between items-center mr-6">
              <p className="font-bold text-xl">Giovanni Donati</p>
              <div className="flex gap-1">
                <p className="font-semibold">Exp:</p>
                <p>+3 anos</p>
              </div>
            </div>
            <p>Desenvolvedor de Software</p>
          </div>
          <div className="mt-2 ml-8 mr-6">
            <p className="text-white leading-relaxed mb-2">
              Prazer, sou Giovanni, atuo como desenvolvedor de software,
              abrangendo todo o ciclo de vida, desde o levantamento de
              requisitos até a implementação e atualizações. Atualmente sou
              responsável por softwares de gestão de estoque (WMS), para gestão
              de logística, controle de capacidade e demanda (CxD), entre outros
              cases.
            </p>
            <div className="flex flex-wrap gap-1 my-4">
              {stacks.map((m, i) => (
                <p
                  key={i}
                  className="bg-black/60 rounded-lg px-2 py-1 border-2 border-blue-500/40 text-blue-500/80 text-sm"
                >
                  {m}
                </p>
              ))}
              {db.map((m, i) => (
                <p
                  key={i}
                  className="bg-black/60 rounded-lg px-2 py-1 border-2 border-green-500/40 text-green-500/80 text-sm"
                >
                  {m}
                </p>
              ))}
              {tools.map((m, i) => (
                <p
                  key={i}
                  className="bg-black/60 rounded-lg px-2 py-1 border-2 border-orange-500/40 text-orange-500/80 text-sm"
                >
                  {m}
                </p>
              ))}
            </div>
            <p className="text-white leading-relaxed">
              Estou sempre em busca de amplificar meus conhecimentos em
              tecnologias, participando de eventos, fóruns e comunidades de
              tecnologia.
            </p>
            <div className="flex justify-between max-md:flex-col items-center md:mb-4">
              <div className="flex w-full mt-4 gap-x-2">
                <a
                  href="https://www.linkedin.com/in/giovanni-donati-dev"
                  target="_blank"
                  title="/giovanni_donati_dev"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-black border-2 border-green-700 text-green-700 hover:border-green-500 hover:bg-black/80 hover:text-white p-2 rounded-lg"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/GiovanniDonati"
                  target="_blank"
                  title="/GiovanniDonati"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-black border-2 border-green-700 text-green-700 hover:border-green-500 hover:bg-black/80 hover:text-white p-2 rounded-lg"
                >
                  <Github />
                </a>
                <a
                  href="https://www.youtube.com/@devdonati"
                  target="_blank"
                  title="@devdonati"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-black border-2 border-green-700 text-green-700 hover:border-green-500 hover:bg-black/80 hover:text-white p-2 rounded-lg"
                >
                  <Youtube />
                </a>
                <a
                  href="https://instagram.com/dev_donati"
                  target="_blank"
                  title="@dev_donati"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-black border-2 border-green-700 text-green-700 hover:border-green-500 hover:bg-black/80 hover:text-white p-2 rounded-lg"
                >
                  <Instagram />
                </a>
                <a
                  href="mailto:donati_dev@gmail.com"
                  target="_blank"
                  title="donati_dev@gmail.com"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-black border-2 border-green-700 text-green-700 hover:border-green-500 hover:bg-black/80 hover:text-white p-2 rounded-lg"
                >
                  <Mail />
                </a>
              </div>
              <a
                class="md:self-end self-start max-sm:my-4 center gap-x-2 px-4 py-2 border-2 border-white/50 bg-white/40 rounded hover:bg-white/30 text-white/80 transition hover:underline"
                title="Currículo"
                href="./curriculo.pdf"
                target="_blank"
              >
                <FileText className="w-5 h-5" />
                Currículo
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col col-span-3 min-h-full w-full bg-black/10 text-white rounded-2xl py-2 border-white/20 border max-lg:my-4"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <h1 className="font-bold text-xl mb-2 mt-1 text-center">
            Algumas Contribuições
          </h1>
          <div class="flex flex-col flex-1 space-y-1 group w-full px-2">
            <div class="relative center flex-col bg-white/10 hover:bg-black/40 border-white/20 border rounded-lg section-animation cursor-default hover:pb-10">
              <p class="project-name">Controle de Estoque - WMS</p>
              <div class="hidden-content flex flex-col items-center">
                <p className="text-center px-4 mb-4">
                  Focado em rastreabilidade de produtos por lotes e controle de
                  produção dos materiais, evitando perdas e aumentando a
                  acuracidade.
                </p>
                <div className="flex space-x-2">
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    Java
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    Spring Boot
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    ReactTS
                  </p>
                  <p className="bg-black/40 text-blue-500/80 border-2 border-blue-500/50 rounded-md px-2 py-1">
                    PostgreSQL
                  </p>
                </div>
                <p className="flex mt-4 gap-2 bg-black/40 text-fuchsia-600 border-2 border-fuchsia-600 rounded-md px-2 py-1">
                  <GitBranch /> 110 Commits
                </p>
                <a
                  class="absolute right-2 bottom-2 center gap-x-2 px-3 py-1 bg-white/20 rounded hover:bg-white/40 text-white transition hover:underline"
                  title="GiovanniDonati/SistemaWMS"
                  href="https://github.com/GiovanniDonati"
                  target="_blank"
                >
                  Ver Mais <ArrowRightCircleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div class="relative center flex-col bg-white/10 hover:bg-black/40 border-white/20 border rounded-lg section-animation cursor-default hover:pb-10">
              <p class="project-name">Sistema Logístico</p>
              <div class="hidden-content flex flex-col items-center">
                <p className="text-center px-4 mb-4">
                  Focado em rastreabilidade de embalagens, no processo de
                  expedição, controlando o armazenamento em prateleiras,
                  trazendo dados em tempo reais de volumes separados/faltantes.
                </p>
                <div className="flex space-x-2">
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    Java
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    Spring Boot
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    ReactJS
                  </p>
                  <p className="bg-black/40 text-blue-500/80 border-2 border-blue-500/50 rounded-md px-2 py-1">
                    MySQL
                  </p>
                </div>
                <p className="flex mt-4 gap-2 bg-black/40 text-fuchsia-600 border-2 border-fuchsia-600 rounded-md px-2 py-1">
                  <GitBranch /> 85 Commits
                </p>
                <a
                  class="absolute right-2 bottom-2 center gap-x-2 px-3 py-1 bg-white/20 rounded hover:bg-white/40 text-white transition hover:underline"
                  title="GiovanniDonati/SistemaWMS"
                  href="https://github.com/GiovanniDonati"
                  target="_blank"
                >
                  Ver Mais <ArrowRightCircleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div class="relative center flex-col bg-white/10 hover:bg-black/40 border-white/20 border rounded-lg section-animation cursor-default hover:pb-10">
              <p class="project-name">Capacidade e Demanda - CxD</p>
              <div class="hidden-content flex flex-col items-center">
                <p className="text-center px-4 mb-4">
                  Cálculo sobre tempo de produção de materiais, rastreando cada
                  etapa, em cada máquina e fazendo gestão de APS de previsão de
                  conclusão do produto, contendo centenas de produtos e mais de
                  50 processos simultâneos.
                </p>
                <div className="flex space-x-2">
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    Python
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    FastAPI
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    ReactJS
                  </p>
                  <p className="bg-black/40 text-blue-500/80 border-2 border-blue-500/50 rounded-md px-2 py-1">
                    PostgreSQL
                  </p>
                </div>
                <p className="flex mt-4 gap-2 bg-black/40 text-fuchsia-600 border-2 border-fuchsia-600 rounded-md px-2 py-1">
                  <GitBranch /> 43 Commits
                </p>
                <a
                  class="absolute right-2 bottom-2 center gap-x-2 px-3 py-1 bg-white/20 rounded hover:bg-white/40 text-white transition hover:underline"
                  title="GiovanniDonati/SistemaWMS"
                  href="https://github.com/GiovanniDonati"
                  target="_blank"
                >
                  Ver Mais <ArrowRightCircleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div class="relative center flex-col bg-white/10 hover:bg-black/40 border-white/20 border rounded-lg section-animation cursor-default hover:pb-10">
              <p class="project-name">Gestão de Salas</p>
              <div class="hidden-content flex flex-col items-center">
                <p className="text-center px-4 mb-4">
                  Sistema para agendamento de salas de reuniões da empresa,
                  disponibilidade de agendamentos por qualquer funcionário,
                  porém restrito de acordo com a permissão do mesmo.
                </p>
                <div className="flex space-x-2">
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    Python
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    FastAPI
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    ReactJS
                  </p>
                  <p className="bg-black/40 text-blue-500/80 border-2 border-blue-500/50 rounded-md px-2 py-1">
                    PostgreSQL
                  </p>
                </div>
                <p className="flex mt-4 gap-2 bg-black/40 text-fuchsia-600 border-2 border-fuchsia-600 rounded-md px-2 py-1">
                  <GitBranch /> 128 Commits
                </p>
                <a
                  class="absolute right-2 bottom-2 center gap-x-2 px-3 py-1 bg-white/20 rounded hover:bg-white/40 text-white transition hover:underline"
                  title="GiovanniDonati/SistemaWMS"
                  href="https://github.com/GiovanniDonati"
                  target="_blank"
                >
                  Ver Mais <ArrowRightCircleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div class="relative center flex-col bg-white/10 hover:bg-black/40 border-white/20 border rounded-lg section-animation cursor-default hover:pb-10">
              <p class="project-name">Controle de Entradas</p>
              <div class="hidden-content flex flex-col items-center">
                <p className="text-center px-4 mb-4">
                  Sistema para gestão de entradas na empresa, desde
                  representantes, visitas, entrevistas e afins, mantendo um
                  controle de cada pessoa externa que adentrar.
                </p>
                <div className="flex space-x-2">
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    Python
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    FastAPI
                  </p>
                  <p className="bg-black/40 text-green-500/80 border-2 border-green-500/50 rounded-md px-2 py-1">
                    ReactJS
                  </p>
                  <p className="bg-black/40 text-blue-500/80 border-2 border-blue-500/50 rounded-md px-2 py-1">
                    PostgreSQL
                  </p>
                </div>
                <p className="flex mt-4 gap-2 bg-black/40 text-fuchsia-600 border-2 border-fuchsia-600 rounded-md px-2 py-1">
                  <GitBranch /> 67 Commits
                </p>
                <a
                  class="absolute right-2 bottom-2 center gap-x-2 px-3 py-1 bg-white/20 rounded hover:bg-white/40 text-white transition hover:underline"
                  title="GiovanniDonati/SistemaWMS"
                  href="https://github.com/GiovanniDonati"
                  target="_blank"
                >
                  Ver Mais <ArrowRightCircleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
