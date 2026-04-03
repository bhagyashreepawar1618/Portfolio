import React from 'react';
import { motion } from 'framer-motion';

function Card({ cardName, image, projectInfo, githublink, liveDemoLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="w-full sm:w-80 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-2xl transition-all duration-300 flex flex-col group"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={cardName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-semibold tracking-wide">
            View Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-700 transition">
          {cardName}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {projectInfo}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <a
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm font-medium border border-purple-600 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-300"
          >
            Code
          </a>

          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-lg hover:opacity-90 transition duration-300 shadow-md"
          >
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
