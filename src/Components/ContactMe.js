// Import React and Tailwind CSS
import React from 'react';
import contact from './contact.png';

const ContactMe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 lg:px-20" id='contact'>
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center m-10 lg:items-start text-center lg:text-left mb-10 lg:mb-0">
        <img
          src={contact}
          alt="Illustration"
          className="w-70 lg:w-80 mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <p className="text-lg text-gray-600">
          My inbox is always open. Whether you have a message or a question, just
          say hello or write a message. I will try my best to get back to you!
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Write Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Write message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message <span className="ml-2">👋</span>
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm text-center lg:text-left mb-4 lg:mb-0">
          &copy; {new Date().getFullYear()} Vishal. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-white-400 hover:text-white transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="text-white-400 hover:text-white transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="/"
            className="text-white-400 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
