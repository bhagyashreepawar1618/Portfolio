import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import components
import About from './Layoutcomponents/About/About.jsx';
import Layout from './Layout.jsx';
import Skill from './Layoutcomponents/Skill/Skill.jsx';
import Contact from './Layoutcomponents/Contact/Contact.jsx';
import ProjectLayout from './Layoutcomponents/Project/projectlayout/ProjectLayout.jsx';
import ReactProjects from './Layoutcomponents/Project/projectlayout/react/ReactProjects.jsx';
import FullstackProjects from './Layoutcomponents/Project/projectlayout/fullstack/FullstackProjects.jsx';
import JavascriptProjects from './Layoutcomponents/Project/projectlayout/javascript/JavascriptProjects.jsx';

import './index.css';

//path route create
const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <About /> },

      {
        path: '/projects',
        element: <ProjectLayout />,
        children: [
          {
            path: '',
            element: <FullstackProjects />,
          },
          {
            path: 'react',
            element: <ReactProjects />,
          },
          {
            path: 'javascript',
            element: <JavascriptProjects />,
          },
        ],
      },

      { path: '/skills', element: <Skill /> },

      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
