import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../components/shared/Image';
import { SITEMAP } from '../routes';
import NotFound from './NotFound';

const ProjectList = () => {
  const { pathname } = window.location;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  function renderProject() {
    if (pathname.endsWith('case-study-1')) {
      return <Image src="/assets/lin-project.png" alt="lin-project" />;
    } else if (pathname.endsWith('case-study-2')) {
      return <Image src="/assets/dya-project.png" alt="dya-project" />;
    } else if (pathname.endsWith('case-study-3')) {
      return (
        <Image src="/assets/riya-food-project.png" alt="riya-food-project" />
      );
    } else if (pathname.endsWith('ui-challenge')) {
      return (
        <Image src="/assets/ui-challenge-page.png" alt="ui-design-challenge" />
      );
    }
    return <NotFound />;
  }
  function showOtherProjects() {
    const linProjectcard = {
      src: '/assets/project/lin-project-card.png',
      alt: 'lin-project',
      link: 'case-study-1',
    };
    const dyaProjectCard = {
      src: '/assets/project/dya-project-card.png',
      alt: 'dya-project',
      link: 'case-study-2',
    };
    const riyaProjectCard = {
      src: '/assets/project/riya-project-card.png',
      alt: 'riya-food-project',
      link: 'case-study-3',
    };

    const projects = [];

    if (pathname.endsWith('case-study-1')) {
      projects.push(dyaProjectCard, riyaProjectCard);
    } else if (pathname.endsWith('case-study-2')) {
      projects.push(linProjectcard, riyaProjectCard);
    } else if (pathname.endsWith('case-study-3')) {
      projects.push(linProjectcard, dyaProjectCard);
    } else if (pathname.endsWith('ui-challenge')) {
      projects.push(linProjectcard, dyaProjectCard, riyaProjectCard);
    }
    return projects;
  }
  const changeProject = (project) => () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate(project);
  };
  return (
    <div className="grid gap-8">
      <div className="project">{renderProject()}</div>
      <div className="other-projects flex gap-8 justify-center">
        {showOtherProjects().map((img, i) => {
          return (
            <Image
              className="cursor-pointer"
              key={i}
              onClick={changeProject(`${SITEMAP.projects}/${img.link}`)}
              src={img.src}
              alt={img.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
