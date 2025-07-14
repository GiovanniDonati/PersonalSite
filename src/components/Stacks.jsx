const myStacks = [
  {
    name: "Java",
    icon: "https://skillicons.dev/icons?i=java",
    type: "image",
  },
  {
    name: "Spring",
    icon: "https://skillicons.dev/icons?i=spring",
    type: "image",
  },
  {
    name: "ReactJS",
    icon: "https://skillicons.dev/icons?i=react",
    type: "image",
  },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
    type: "image",
  },
  {
    name: "Flutter",
    icon: "https://skillicons.dev/icons?i=flutter",
    type: "image",
  },
  {
    name: "Docker",
    icon: "https://skillicons.dev/icons?i=docker",
    type: "image",
  },
  {
    name: "Linux",
    icon: "https://skillicons.dev/icons?i=linux",
    type: "image",
  },
];

const Stacks = () => {
  return (
    <section id="stacks" className="py-16 md:py-24 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Minhas Stacks
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
          {myStacks.map((stack, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {stack.type === "image" ? (
                <img
                  src={stack.icon}
                  alt={stack.name}
                  className="w-16 h-16 mb-3"
                />
              ) : (
                <stack.icon size={64} className="text-gray-700 mb-3" />
              )}
              <h3 className="text-lg font-semibold text-gray-800">
                {stack.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
