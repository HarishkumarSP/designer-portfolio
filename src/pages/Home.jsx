import Resume from '../components/shared/Resume';
import SocialIcons from '../components/shared/SocialIcons';
import { Config } from '../config';
import TextTypingAnimation from '../components/shared/TextTypingAnimation';
import Image from '../components/shared/Image';

const Home = () => {
  return (
    <div className="home grid grid-cols-[60%,40%] sm:flex  sm:mx-auto h-screen gap-5 ml-20 items-center">
      <div className="home-content text-justify ">
        <h1 className="text-[#FF686B]">
          <span className="text-5xl sm:text-3xl font-normal"> Hi There,</span>{' '}
          <span className="text-[64px] font-bold sm:text-3xl">
            I&apos;m {Config.DESIGNER_SHORT_NAME}:)
          </span>
        </h1>
        <h2 className="text-5xl sm:text-3xl">
          <span className="text-[#FF686B]"> And I&apos;m a&nbsp;</span>
          <span className="designer-role-text">
            <TextTypingAnimation
              texts={['UX/UI Designer', 'Content Creator', 'Costume Designer']}
            />
          </span>
        </h2>
        <p className="w-9/12 py-3">
          I’m very passionate about to design web and mobile application, User
          Experience Designer, who knows the user needs, creating better
          solutions for users to give good experience through the product.
        </p>
        <div className="flex flex-col items-start gap-4 my-4">
          <SocialIcons />
          <Resume />
        </div>
      </div>
      <div className="home-animate-image max-w-fit absolute sm:hidden left-[45rem]">
        <Image src="/assets/home-animate-man.gif" alt="animate-man" />
      </div>
    </div>
  );
};

export default Home;
