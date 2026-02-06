import React from 'react';

function Card({ cardName, image, projectInfo }) {
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
    </div>
  );
}

export default Card;
