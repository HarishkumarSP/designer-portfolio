import { Config } from '../config';
import SocialIcons from './shared/SocialIcons';

const Footer = () => {
  return (
    <footer className="grid gap-5">
      <SocialIcons />
      <text className="text-2xl underline text-[#FF686B]">
        Contact us Email :{' '}
        <a
          href={`mailto:${Config.DESIGNER_EMAIL}?subject=Contacting Designer ${Config.DESIGNER_NAME}`}
        >
          {Config.DESIGNER_EMAIL}
        </a>
      </text>
      <div className="developer-info text-gray-500">
        Made with &#10084; by{' '}
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          className="cursor-pointer text-[#FF686B]"
          href={Config.DEVELOPER_LINK}
        >
          Harish{' '}
        </a>
        <br />
        Design ♛ by{' '}
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          className="cursor-pointer text-[#FF686B]"
          href={Config.DESIGNER_DRIBBLE_LINK}
        >
          {Config.DESIGNER_SHORT_NAME}{' '}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
