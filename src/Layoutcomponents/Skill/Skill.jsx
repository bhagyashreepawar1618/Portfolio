import React from 'react';
import { motion } from 'framer-motion';
import Icons from './Icons.jsx';

function Skill() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-purple-800 mb-12"
        >
          Skills & Expertise
        </motion.h1>

        {/* DSA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#63559f]">
            Problem Solving & DSA 🧠
          </h2>

          <p className="text-base md:text-lg leading-7 mt-4 text-gray-700">
            I actively practice Data Structures and Algorithms to strengthen
            problem-solving skills, with a solid foundation in arrays, strings,
            recursion, and core linked list concepts, along with time and space
            complexity analysis.
          </p>
        </motion.div>

        {/* SKILL SECTIONS */}
        <div className="space-y-14">
          {/* Languages */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Languages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="javascript" />
              <Icons iconname="cplusplus" />
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Frontend Development
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="html5" />
              <Icons iconname="css3" />
              <Icons iconname="react" />
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Frameworks & Libraries
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="bootstrap" />
              <Icons iconname="tailwindcss" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Backend Development
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="nodejs" />
              <Icons iconname="express" />
            </div>
          </div>

          {/* Databases */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Databases
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="mongodb" />
              <Icons iconname="mysql" />
            </div>
          </div>

          {/* Deployment */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Deployment
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="vercel" />
              <Icons iconname="render" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Tools & Design
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <Icons iconname="git" />
              <Icons iconname="github" />
              <Icons iconname="figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
