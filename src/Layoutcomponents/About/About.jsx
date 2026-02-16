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
            color: '#635599',
          }}
        >
          About Me
        </h1>

        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#000000' }}>
          Hey! 👋 I’m a Computer Engineering student who loves building
          real-world web applications. Over time, I’ve moved beyond just
          learning concepts and started creating complete projects that solve
          practical problems.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '15px' }}>
          I’ve built a <strong>YouTube Clone</strong> as a full-stack project
          and also developed a <strong>Food Management system</strong> from
          scratch. Currently, I’m working on a{' '}
          <strong>Social Media Clone</strong> full-stack application while
          expanding my skills in <strong>Next.js</strong> to build more scalable
          and production-ready applications.
        </p>

        <h2
          style={{
            marginTop: '40px',
            fontSize: '32px',
            color: '#635895',
          }}
        >
          What I’m Learning 🚀
        </h2>

        <ul style={{ fontSize: '18px', lineHeight: '2', marginTop: '15px' }}>
          <li>⚛️ React & Next.js (components, hooks, routing, SSR basics)</li>
          <li>🧠 Advanced JavaScript (ES6+, async/await, API integration)</li>
          <li>🗄️ Full-Stack Development (Node.js, Express, MongoDB)</li>
          <li>🚀 Building scalable real-world applications</li>
        </ul>

        <h2
          style={{
            marginTop: '40px',
            fontSize: '32px',
            color: '#63559f',
          }}
        >
          My Goal ✨
        </h2>

        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
          My goal is to become a confident fullstack developer who understands
          concepts deeply, builds clean projects, and keeps improving step by
          step — without rushing the process.
        </p>
      </div>
    </section>
  );
}

export default About;
