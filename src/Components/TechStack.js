import React from 'react';

const techStack = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];

const TechStack = () => {
  return (
    <div className="bg-gray-100 py-12" id='tech'>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">The Tech Stacks</h2>
        <p className="text-lg text-gray-600 text-bold mt-5">What in My Skills</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 px-2 sm:px-6 lg:px-20">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center group mt-8 m-5 container">
            <div className="bg-white p-3 rounded-lg shadow-md transform group-hover:-translate-y-1 transition duration-300">
              <img src={tech.icon} alt={tech.name} className="h-14 w-14" />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
