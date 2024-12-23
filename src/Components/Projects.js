import React from 'react';
import mern from './mern.png';
import attend from './attend.png';

const projects = [
  {
    title: 'RealTime Chat App',
    description: 'The project is fully responsive design and user-friendly. Here we uses Prisma React and Node, and MongoDB as the database.',
    technologies: 'React, Tailwindcss, Node, MongoDB',
    github: '#',
    live: '#',
    image: mern,
  },
  {
    title: 'Student Attendance Management System',
    description: 'The project is fully responsive design and user-friendly. It includes student attendance functionality with real-time updates using Redux.',
    technologies: 'React.js, Tailwindcss, Redux, Material UI',
    github: '#',
    live: '#',
    image: attend,
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-gray-100 py-6" id='project'>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mt-5">My Projects & Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 lg:px-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
            <img src={project.image} alt={project.title} className="w-full h-32 object-cover" /><br></br>
            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3><br></br>
              <p className="text-teal-600 font-medium mt-1 text-sm">Key Technologies and Tools:</p>
              <p className="text-gray-600 mb-2 text-sm">{project.technologies}</p><br></br>
              <p className="text-gray-700 mb-3 text-sm">{project.description}</p><br></br>
              <div className="flex space-x-2">
                <a href={project.github} className="bg-teal-500 text-white px-2 py-1 rounded-md hover:bg-teal-600 text-sm">GitHub</a>
                <a href={project.live} className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-600 text-sm">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
