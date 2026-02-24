import React from 'react';
import Icons from './Icons.jsx';

function Skill() {
  return (
    <section className="py-12 bg-purple-50">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-10">
        Skills
      </h1>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-6">
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
    </section>
  );
}

export default Skill;
