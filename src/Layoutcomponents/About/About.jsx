import react from 'react';

function About() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'white',
        color: '#000000',
        padding: '60px 40px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ maxWidth: '900px', margin: 'auto' }}>
        <h1
          style={{
            fontSize: '48px',
            marginBottom: '20px',
            color: '#c4b5fd',
          }}
        >
          About Me
        </h1>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#000000' }}>
          Hey! 👋 I’m a Computer Engineering student who genuinely enjoys
          building things on the web. I started with the basics of programming
          and gradually moved into frontend development — learning how real
          applications actually work, not just copying code.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '15px' }}>
          Right now, I’m focused on{' '}
          <strong>JavaScript, React, and React Router</strong>. I like
          understanding the flow of an application — how components connect, how
          state changes, and how routing ties everything together.
        </p>

        <h2
          style={{
            marginTop: '40px',
            fontSize: '32px',
            color: '#ddd6fe',
          }}
        >
          What I’m Learning 🚀
        </h2>

        <ul style={{ fontSize: '18px', lineHeight: '2', marginTop: '15px' }}>
          <li>⚛️ React (components, hooks, routing)</li>
          <li>🧠 JavaScript fundamentals & DOM</li>
          <li>🎨 Styling with CSS & UI basics</li>
          <li>📦 Building small real-world projects</li>
        </ul>

        <h2
          style={{
            marginTop: '40px',
            fontSize: '32px',
            color: '#ddd6fe',
          }}
        >
          My Goal ✨
        </h2>

        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
          My goal is to become a confident frontend developer who understands
          concepts deeply, builds clean projects, and keeps improving step by
          step — without rushing the process.
        </p>
      </div>
    </section>
  );
}

export default About;
