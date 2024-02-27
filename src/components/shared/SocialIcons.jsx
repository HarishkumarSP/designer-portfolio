import { useState } from 'react';
import { Config } from '../../config';

const SocialIcons = () => {
  const footerIcons = [
    {
      src: '/icons/dribble-logo.svg',
      hoverSrc: '/icons/dribble-logo-white.svg',
      alt: 'dribble-logo',
      link: Config.DESIGNER_DRIBBLE_LINK,
    },
    {
      src: '/icons/linked-in-logo.svg',
      hoverSrc: '/icons/linked-in-logo-white.svg',
      alt: 'linked-in-logo',
      link: Config.DESIGNER_LINKEDIN_LINK,
    },
    {
      src: '/icons/mail-logo.svg',
      hoverSrc: '/icons/mail-logo-white.svg',
      alt: 'mail-logo',
      link: `mailto:${Config.DESIGNER_EMAIL}?subject=Contacting Designer ${Config.DESIGNER_NAME}`,
    },
  ];
  return (
    <div className="flex justify-center gap-7">
      {footerIcons.map((icons) => {
        return <Icons key={icons.src} icons={icons} />;
      })}
    </div>
  );
};

const Icons = ({ icons }) => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <a
      href={icons.link}
      target="_blank"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      referrerPolicy="no-referrer"
      className={`p-3 rounded-full hover:bg-[#FF686B]`}
    >
      <img src={isHovered ? icons.hoverSrc : icons.src} alt={icons.alt} />
    </a>
  );
};

export default SocialIcons;
