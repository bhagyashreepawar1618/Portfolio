import { NavLink } from 'react-router-dom';

function ProjectHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-100 to-purple-50 px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-xl shadow-sm">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-purple-800 text-center md:text-left">
        My Projects
      </h2>

      {/* Navigation */}
      <ul className="flex gap-3 md:gap-6 text-sm font-medium overflow-x-auto scrollbar-hide">
        <li>
          <NavLink
            to="/projects/javascript"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-purple-700 text-white shadow-md'
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
              `px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-purple-700 text-white shadow-md'
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
              `px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-purple-700 text-white shadow-md'
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
