import { Outlet } from 'react-router-dom';
import ProjectHeader from './ProjectHeader';

function ProjectLayout() {
  return (
    <>
      <ProjectHeader />
      <Outlet />
    </>
  );
}

export default ProjectLayout;
