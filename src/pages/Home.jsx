import { useEffect, useState } from 'react';
import Resume from '../components/shared/Resume';
import SocialIcons from '../components/shared/SocialIcons';
import { Config } from '../config';

const Home = () => {
  return (
    <div className="home grid grid-cols-[60%,40%] h-screen gap-5 mx-44 items-center">
      <div className="home-content text-justify ">
        <h1 className="text-[#FF686B]">
          <span className="text-5xl font-normal"> Hi There,</span>{' '}
          <span className="text-[64px] font-bold">
            I&apos;m {Config.DESIGNER_SHORT_NAME}:)
          </span>
        </h1>
        <h2 className="text-5xl">
          <span className="text-[#FF686B]"> And I&apos;m a&nbsp;</span>
          <span className="designer-role-text">
            <TextTypeWriter />
          </span>
        </h2>
        <p className="w-[488px] py-3">
          I’m very passionate about to design web and mobile application, User
          Experience Designer, who knows the user needs, creating better
          solutions for users to give good experience through the product.
        </p>
        <div className="flex flex-col items-start gap-4 my-4">
          <SocialIcons />
          <Resume />
        </div>
      </div>
      <div className="home-animate-image flex">
        <div className="absolute bottom-40">
          <img src="/assets/home-animate-man.png" alt="animate-man" />
        </div>
        <div className="bottom-10 right-[9rem] absolute w-[354px]">
          <img src="/assets/home-animate-display.png" alt="animate-display" />
        </div>
      </div>
    </div>
  );
};

export default Home;

const TextTypeWriter = () => {
  const texts = ['UX/UI Designer', 'Content Creator', 'Costume Designer'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentText.length < texts[currentTextIndex].length) {
        setCurrentText(
          (prevText) => prevText + texts[currentTextIndex][currentText.length]
        );
      } else {
        clearInterval(intervalId);

        // Wait for a pause, then move to the next text
        setTimeout(() => {
          setCurrentText('');
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // Adjust the pause time (in milliseconds) as needed
      }
    }, 300); // Adjust the typing speed (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [currentText, currentTextIndex]);

  return <>{currentText}</>;
};
