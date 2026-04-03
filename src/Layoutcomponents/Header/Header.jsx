import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-3 backdrop-blur-md bg-purple-900/80 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <h1 className="text-lg md:text-xl font-bold text-white">
            Bhagyashree Pawar
          </h1>

          <a
            href="https://github.com/bhagyashreepawar1618"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-medium shadow hover:scale-105 transition"
          >
            🚀 GitHub
          </a>

          <a
            href="/Bhagyashree_Pawar_Resume1.pdf"
            download
            className="px-4 py-2 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-purple-800 transition"
          >
            📄 Resume
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {[
            { to: '/', label: 'About' },
            { to: '/education', label: 'Education' },
            { to: '/projects', label: 'Projects' },
            { to: '/skills', label: 'Skills' },
            { to: '/contact', label: 'Contact' },
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-purple-800 shadow'
                    : 'text-purple-200 hover:bg-white/20 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
