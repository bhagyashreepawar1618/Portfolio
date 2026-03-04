import React from 'react';
import Icons from './Icons.jsx';

function Skill() {
  return (
    <section className="py-12 bg-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
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

        {/* Skills Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            <Icons iconname="html5" />
            <Icons iconname="css3" />
            <Icons iconname="javascript" />
            <Icons iconname="bootstrap" />
            <Icons iconname="tailwindcss" />
            <Icons iconname="figma" />
            <Icons iconname="cplusplus" />
            <Icons iconname="git" />
            <Icons iconname="github" />
            <Icons iconname="react" />
            <Icons iconname="nodejs" />
            <Icons iconname="express" />
            <Icons iconname="mongodb" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
