import React from 'react';

function Card({ cardName, image, projectInfo, githublink, liveDemoLink }) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={cardName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{cardName}</h2>

        <p className="text-gray-600 text-sm">{projectInfo}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-3">
        <a
          href={githublink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 text-sm font-medium border border-purple-900 text-purple-600 rounded-lg  "
        >
          GitHub
        </a>

        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 text-sm font-medium bg-purple-900 text-white rounded-lg hover:bg-purple-500 transition-all duration-300"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Card;
