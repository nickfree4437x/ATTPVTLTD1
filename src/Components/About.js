import React from "react";
import ProfileImage from "./profile-pic.jpg";
import './Style.css';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100  flex justify-center items-center p-6 vishal" id="about">
      <div className="max-w-4xl rounded-lg p-8 flex flex-col lg:flex-row gap-8">
        {/* Left Section: Image */}
        <div className="flex justify-center items-center">
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-lg overflow-hidden shadow-md">
            <img
              src={ProfileImage} // Replace with your image
              alt="Saiful Ajom Khan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section: About Content */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2 ml-5">About Me</h1><br></br>
          <br></br>
           <div className="cot ml-5">
           <h2 className="text-2xl font-semibold text-gray-700">Vishal Kumar</h2>
          <p className="text-gray-600 font-medium mb-4">B.Tech (IT)</p>

          {/* develop */}
          <p className="full1">Full Stack Developer</p>

          {/* Contact Information */}
          <div className="mt-6">
            <p className="text-gray-600">
              <span className="font-medium">Call:</span> +91-7505784698
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> vishalsaini5678niwarkhas@gmail.com
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> Moradabad, Uttar Pradesh
            </p>
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-600">
            <p>
              Experienced Full Stack Web Developer with 1+ years of expertise in crafting
              scalable web applications. Proficient in a wide range of technologies, I
              specialize in building dynamic and responsive solutions using the latest
              tools and frameworks.
            </p>

            <h3 className="mt-4 font-semibold">Technical Skills:</h3>
            <ul className="list-disc list-inside">
              <li>Languages: JavaScript, Python, C++, PHP</li>
              <li>Frontend: React.js,HTML, CSS, JavaScript, Tailwind CSS, Bootstrap</li>
              <li>Backend: Node.js, Express.js, PHP</li>
              <li>Database: MongoDB, MySQL</li>
              <li>Version Control: GitHub</li>
              <li>Design: Figma, Photoshop, and Illustrator</li>
            </ul>

            <p className="mt-4">
              My proficiency in frontend technologies, including React.js,
              enables me to create engaging user interfaces, while my strong backend
              skills with Node.js and Express.js ensure seamless integration server-side functionalities.
            </p>
            <p className="mt-4">
            Passionate about staying updated with the latest industry trends,
             I actively seek opportunities for professional development. My 
             commitment to continuous learning ensures that I am well-equipped
              to adopt new technologies and methodologies, keeping my skill
               set at the forefront of the ever-evolving web development landscape.
            </p>
            <br></br>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-green-500
                    hover:to-blue-600 transition flex items-center space-x-2 show mr-5 resume">
                <span>View Work</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
        
           </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutPage;
