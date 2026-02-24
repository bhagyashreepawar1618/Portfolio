import react from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header
        style={{
          marginBottom: '15px',
          position: 'sticky',
          top: '0',
          zIndex: '1000',
        }}
      >
        <nav>
          <div
            style={{
              width: '100%',
              background: 'linear-gradient(90deg,#3b0764,#581c87,#7e22ce)',
              padding: '14px 20px',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '50px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {/* Left Side */}
            <div
              className="text-white"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              Bhagyashree Pawar
              <a
                href="https://github.com/bhagyashreepawar1618"
                className="text-white"
                style={{ textDecoration: 'none' }}
              >
                Github
              </a>
            </div>

            {/* Right Side Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
              }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                About
              </NavLink>

              <NavLink
                to="/education"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                Education
              </NavLink>

              <NavLink
                to="/projects"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                Projects
              </NavLink>

              <NavLink
                to="/skills"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                Skills
              </NavLink>

              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
