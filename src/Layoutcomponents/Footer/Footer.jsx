import react from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2e1065] to-[#3b0764] text-purple-200 px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-purple-300 mb-4">
          Bhagyashree Pawar
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
          <a
            href="mailto:bhagyashreepawar1618@gmail.com"
            className="hover:text-white transition duration-300"
          >
            📧 bhagyashreepawar1618@gmail.com
          </a>

          <a
            href="https://github.com/bhagyashreepawar1618"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            💻 GitHub
          </a>

          <a
            href="https://leetcode.com/u/bhagyashree1618/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            🧠 LeetCode
          </a>
        </div>

        <p className="mt-6 text-sm text-purple-300">
          Learning • Building • Improving 🚀
        </p>

        <p className="mt-2 text-xs text-purple-400">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
