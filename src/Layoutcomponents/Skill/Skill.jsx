import React from 'react';
import '../../App.css';
import Icons from './Icons.jsx';
function Skill() {
  return (
    <>
      <h1
        className="text-black text-bold"
        style={{
          color: '#4c1d95',
          fontSize: '30px',
          textAlign: 'center',
          display: 'block',
        }}
      >
        Skills
      </h1>
      <div className="w-screen flex justify-center items-center" style={{}}>
        <div className=" w-200 flex flex-wrap gap-5">
          <Icons iconname={'html5'} />
          <Icons iconname={'css3'} />
          <Icons iconname={'javascript'} />
          <Icons iconname={'bootstrap'} />
          <Icons iconname={'tailwindcss'} />
          <Icons iconname={'figma'} />
          <Icons iconname={'cplusplus'} />
          <Icons iconname={'git'} />
          <Icons iconname={'github'} />
          <Icons iconname={'react'} />
          <Icons iconname={'nodejs'} />
          <Icons iconname={'express'} />
          <Icons iconname={'mongodb'} />
        </div>
      </div>
    </>
  );
}

export default Skill;
