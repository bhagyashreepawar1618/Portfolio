import react from 'react';

function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg,#2e1065,#3b0764)',
        color: '#e9d5ff',
        padding: '30px 20px',
        textAlign: 'center',
      }}
    >
      <h3 style={{ color: '#c4b5fd', marginBottom: '10px' }}>
        Bhagyashree Pawar
      </h3>

      <p style={{ marginBottom: '8px' }}>
        📧 Email:{}
        <a
          href="mailto:bhagyashreepawar1618@gmail.com"
          style={{ color: '#ddd6fe', textDecoration: 'none' }}
        >
          bhagyashreepawar1618@gmail.com
        </a>
      </p>

      <p style={{ marginBottom: '8px' }}>
        <a
          href="https://github.com/bhagyashreepawar1618"
          target="_blank"
          style={{ color: '#ddd6fe', textDecoration: 'none' }}
        >
          💻 GitHub
        </a>
      </p>

      <p>
        <a
          href="https://leetcode.com/u/bhagyashree1618/"
          target="_blank"
          style={{ color: '#ddd6fe', textDecoration: 'none' }}
        >
          🧠 LeetCode
        </a>
      </p>

      <p
        style={{
          marginTop: '20px',
          fontSize: '14px',
          color: '#d8b4fe',
        }}
      >
        Learning • Building • Improving 🚀
      </p>
    </footer>
  );
}

export default Footer;
