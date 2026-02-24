import React from 'react';

function Card({ cardName, image, projectInfo, githublink, liveDemoLink }) {
  return (
    <div className="w-full sm:w-80 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={cardName}
          className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{cardName}</h2>

        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {projectInfo}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm font-medium border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-300"
          >
            GitHub
          </a>

          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm font-medium bg-purple-800 text-white rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
