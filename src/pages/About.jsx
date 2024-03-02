import Resume from '../components/shared/Resume';
import TextTypingAnimation from '../components/shared/TextTypingAnimation';
import { Config } from '../config';

const About = () => {
  const skills = [
    'User Personas',
    'User stories',
    'User Journey Map',
    'Information Architecture',
    'Wireframes',
    'Lo-fi & Hi-fi Prototype',
    'User Research',
    'Mockups',
    'UI design',
  ];
  const softwareUsed = ['Figma', 'Adobe XD', 'Corel Draw', 'Prottapp', 'Canva'];
  return (
    <div className="about-me-container flex justify-center gap-20 p-10">
      <div className="about-image flex flex-col justify-start gap-16 my-10">
        <img src="/assets/about-me-girl.png" alt="about-girl" />
        <Resume />
      </div>
      <div className="about-me-contents text-start grid text-lg gap-12 my-10">
        <h2 className="text-5xl text-[#FF686B]">
          <TextTypingAnimation
            className="block h-[3.5rem]"
            texts={[` Hello, I'm ${Config.DESIGNER_SHORT_NAME}:)`]}
          />
        </h2>
        <div className="about-description grid gap-5">
          <p className="w-[504px]">
            In past, I’m a costume designer and ran my costume design business
            and then later I want to learn something new in designing field,
            then I found UX design in google.
          </p>
          <p className="w-[504px]">
            In my learning journey, I enjoy every process from stage Empathy to
            Testing and I also love to do draw and designing something new.
          </p>
          <p className="w-[504px]">
            I am very passionate about web and mobile app with knowledge of
            wireframes, prototypes and all design process concepts and I also
            believe to solve user pain points and create innovative design
            solutions.
          </p>
        </div>
        <div className="skills flex justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#FF686B] text-2xl font-semibold">Skills</h2>
            <ul className="list-disc pl-10">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 ">
            <h2 className="text-[#FF686B] text-2xl font-semibold">Software</h2>
            <ul className="list-disc pl-10">
              {softwareUsed.map((software, i) => (
                <li key={i}>{software}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
