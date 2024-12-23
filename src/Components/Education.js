// EducationExperience.jsx
import React from "react";

const EducationExperience = () => {
  const education = {
    title: "B.Tech Information Technology | 20022-2026",
    institution: "Malout Institute Of Management And Information Technology",
    subject: "Information Technology",
  };

  return (
    <section className="py-10 bg-gray-100 vishal">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Education
        </h2>
        <div className="flex flex-col items-center relative">
          {/* Vertical Line */}
          <div className="absolute h-full w-1 bg-teal-500 top-8 left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Label */}
          <div className="bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 z-10">
            Education
          </div>
          {/* Icon */}
          <div className="bg-teal-500 text-white p-4 rounded-full mb-4 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l6.16-3.422A12.083 12.083 0 0118 12.252V19a2 2 0 01-2 2H8a2 2 0 01-2-2v-6.748a12.083 12.083 0 01-.16-.674L12 14z"
              />
            </svg>
          </div>
          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center z-10">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              {education.title}
            </h3>
            <p className="text-gray-700">{education.institution}</p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Subject:</span> {education.subject}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
