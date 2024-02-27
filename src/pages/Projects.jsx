import { Link } from 'react-router-dom';
import { SITEMAP } from '../routes';
import Image from '../components/shared/Image';
import { Config } from '../config';
const Projects = () => {
  const caseStudiesImages = [
    {
      src: '/assets/case-study1.png',
      alt: 'case-study-1',
    },
    {
      src: '/assets/case-study2.png',
      alt: 'case-study-2',
    },
    {
      src: '/assets/case-study3.png',
      alt: 'case-study-3',
    },
    {
      src: '/assets/ui-challenge-card.png',
      alt: 'ui-challenge',
    },
  ];
  return (
    <div className="project-container grid justify-center">
      <div className="project-title-contents grid gap-5 text-[#FF686B] my-5">
        <h1 className="text-5xl">UI/UX Designer</h1>
        <p>
          Hi, I&apos;m {Config.DESIGNER_SHORT_NAME}, Here are a few pieces of my
          creative design works.
        </p>
      </div>
      <div className="projects grid gap-5">
        {caseStudiesImages.map((img) => (
          <Link key={img.alt} to={`${SITEMAP.projects}/${img.alt}`}>
            <Image width={1140} height={452} src={img.src} alt={img.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
