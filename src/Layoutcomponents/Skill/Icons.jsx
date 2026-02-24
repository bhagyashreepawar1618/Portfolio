import React from 'react';

function Icons({ iconname }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 w-32 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="h-24 w-24 flex items-center justify-center">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconname}/${iconname}-original.svg`}
          alt={iconname}
          className="h-20 w-20 object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      <p className="mt-4 text-sm font-medium text-purple-700 capitalize">
        {iconname}
      </p>
    </div>
  );
}

export default Icons;
