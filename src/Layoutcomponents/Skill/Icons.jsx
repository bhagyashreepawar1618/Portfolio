import React from 'react';
import '../../App.css';

function Icons({ iconname }) {
  return (
    <>
      <div className="skill-card">
        <img
          height="110px"
          width="110px"
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconname}/${iconname}-original.svg`}
          alt={iconname}
        />
        <p>{iconname}</p>
      </div>
    </>
  );
}

export default Icons;
