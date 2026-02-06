// import links and navlinks for routing purpose
import { NavLink } from 'react-router-dom';

function ProjectHeader() {
  return (
    <div className="w-full bg-purple-100 px-10 py-4 flex items-center justify-between rounded-md shadow-sm">
      {/* Left side heading */}
      <h2 className="text-xl font-semibold text-purple-800">My Projects</h2>

      {/* Right side navigation */}
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <NavLink
            to="/projects/javascript"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-700 hover:bg-purple-200'
              }`
            }
          >
            JAVASCRIPT
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects/react"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-700 hover:bg-purple-200'
              }`
            }
          >
            REACT
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-700 hover:bg-purple-200'
              }`
            }
          >
            FULLSTACK
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProjectHeader;
