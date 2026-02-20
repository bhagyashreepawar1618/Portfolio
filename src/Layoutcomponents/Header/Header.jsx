import react from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header style={{ marginTop: '15px', marginBottom: '15px' }}>
        <nav>
          <div
            style={{
              width: '100vw',
              background: 'linear-gradient(90deg,#3b0764,#581c87,#7e22ce)',
              padding: '14px',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '50px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            }}
          >
            <div className="text-white">
              Bhagyashree Pawar
              <a
                href="https://github.com/bhagyashreepawar1618"
                className="text-white ms-2"
              >
                Github
              </a>
            </div>

            {/* for about section  */}
            <div>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '10px 18px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                About
              </NavLink>

              {/* for skills section */}
              <NavLink
                to="/projects"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '10px 18px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                Projects
              </NavLink>

              {/* for project section  */}
              <NavLink
                to="/skills"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '10px 18px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  transition: '0.3s',
                })}
              >
                Skills
              </NavLink>

              {/* for contact section  */}
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#e9d5ff',
                  background: isActive
                    ? 'linear-gradient(90deg,#7c3aed,#a855f7)'
                    : 'transparent',
                  padding: '10px 18px',
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
