import React from 'react';
import Icons from './Icons.jsx';

function Skill() {
  return (
    <section className="py-12 bg-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10">
          Skills
        </h1>

        {/* DSA Section */}
        <h2 className="text-2xl font-semibold text-[#63559f]">
          Problem Solving & DSA 🧠
        </h2>

        <p className="text-lg leading-8 mt-4 text-gray-700 max-w-3xl mx-auto">
          Alongside fullstack development, I actively practice Data Structures
          and Algorithms to strengthen my problem-solving skills. I have a
          strong foundation in Arrays, Strings, Recursion, and fundamental
          Linked List concepts, along with a clear understanding of time and
          space complexity.
        </p>

        {/* Languages */}
        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
          Languages
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <Icons iconname="javascript" />
          <Icons iconname="cplusplus" />
        </div>

        {/* Frontend */}
        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
          Frontend Development
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <Icons iconname="html5" />
          <Icons iconname="css3" />
          <Icons iconname="react" />
        </div>

        {/* Frameworks */}
        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
          Frameworks & Libraries
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <Icons iconname="bootstrap" />
          <Icons iconname="tailwindcss" />
        </div>

        {/* Backend */}
        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
          Backend Development
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <Icons iconname="nodejs" />
          <Icons iconname="express" />
        </div>

        {/* Databases */}
        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
          Databases
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <Icons iconname="mongodb" />
          <Icons iconname="mysql" />
        </div>

        {/* Deployment */}
        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
          Deployment
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <Icons iconname="vercel" />
          <Icons iconname="render" />
        </div>

        {/* Tools */}
        <h2 className="text-2xl font-semibold text-purple-700 mt-12 mb-6">
          Tools & Design
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          <Icons iconname="git" />
          <Icons iconname="github" />
          <Icons iconname="figma" />
        </div>
      </div>
    </section>
  );
}

export default Skill;
