import React from 'react';
//import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
//import { motion } from 'framer-motion';
import './Style.css';
import profile from './profile-pic.jpg';


const Home = () => {
  return (
    <div className="min-h-screen home flex items-center justify-center w-50 bg-gray-100 dark:bg-gray-900 px-6 md:px-12" id='home'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        <div className="text-center md:text-left">
          <p className="text-lg mb-2 hey ml-10">👋 Hey,</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            I'm <span className="text-black-600">Vishal Kumar</span>
          </h1><br></br>
          <h2 className="text-2xl mt-3 text-gray-700 dark:text-gray-300 full">
            I am into <span className="text-green-500 font-medium">Full Stack Development</span>
          </h2>
          <p className="text-lg mt-5 text-gray-600 dark:text-gray-400 leading-relaxed stack">
            I specialize in Full Stack Web Development, where my passion lies in crafting responsive and user-friendly web applications. I prioritize meticulous attention to detail, scalability, and performance to ensure that every project I undertake exceeds client expectations.
          </p><br></br>
          <a className="bg-gradient-to-r show from-green-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition flex items-center space-x-2 show">
          <span>Show Works</span>
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
        </a>
        </div>

         {/* Right Section */}
      <div className="flex-1 flex flex-col items-center mt-8 md:mt-0 relative">
        {/* Profile Image */}
        <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg profile">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

      {/* Icons Around */}
      <div className="absolute w-72 h-72 top-0 left-20 flex justify-center items-center">
          {/* Top Left Icon */}
          <div className="absolute -top-0 -left-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              className="w-7 h-7"
            />
          </div>
          {/* Top Right Icon */}
          <div className="absolute -top-5 right-0 type">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              alt="typescript"
              className="w-7 h-7"
            />
          </div>
          {/* Bottom Left Icon */}
          <div className="absolute bottom-13 -left-0 npic">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js"
              className="w-7 h-7"
            />
          </div>
          {/* Bottom Right Icon */}
          <div className="absolute bottom-0 right-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS3"
              className="w-7 h-7 cpic"
            />
          </div>
          {/* Top Center Icon */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript"
              className="w-7 h-7"
            />
          </div>
          {/* Bottom Center Icon */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="Bootstrap"
              className="w-7 h-7 bpic"
            />
          </div>
          </div>
    </div>
    </div>

       {/* Sidebar */}
    <div className="hidden md:flex flex-col items-center space-y-4 p-4 fixed left-0 top-1/4">
      <a
        href="https://github.com/nickfree4437x"
        className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          className="w-5 h-5"
        />
      </a>
      <a
        href="https://www.linkedin.com/feed/"
        className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          className="w-5 h-5"
        />
      </a>
      <a
        href="https://x.com/sainivishal512"
        className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
          alt="Twitter"
          className="w-5 h-5"
        />
      </a>
      <a
        href="/"
        className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="CV"
          className="w-5 h-5"
        />
      </a>
      <a
        href="/"
        className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Email"
          className="w-5 h-5"
        />
      </a>
    </div>
    </div>
  );
};

export default Home;
