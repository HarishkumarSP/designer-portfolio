import { AppBar } from '@mui/material';
import { SITEMAP } from '../routes';
import { Link, NavLink } from 'react-router-dom';
import { Config } from '../config';

const NavBar = () => {
  const routesLinks = [
    {
      text: 'Home',
      link: SITEMAP.home,
    },
    {
      text: 'Projects',
      link: SITEMAP.projects,
    },
    {
      text: 'About',
      link: SITEMAP.about,
    },
    {
      text: 'Contact',
      link: SITEMAP.contact,
    },
  ];

  function Logo() {
    return (
      <img className="animated-logo" src="/icons/sp-logo.svg" alt="sp-logo" />
    );
  }

  return (
    <div className="flex">
      <AppBar
        component="nav"
        className="h-16 p-10 !shadow-sm border-2 border-[#FF686B] !bg-[#FFFFFF] !text-inherit"
      >
        <div className="flex justify-between relative bottom-3 mx-10">
          <header className="text-[#FF686B] font-bold text-2xl">
            <Link to={SITEMAP.home}>{Config.DESIGNER_NAME}</Link>
          </header>
          <div className="ml-24 sm:hidden">
            <Logo />
          </div>
          <div className="flex gap-12 text-base font-bold sm:hidden">
            {routesLinks.map((route) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FF686B] shadow-inner[0px 1px 1px 1px] '
                    : 'hover:text-[#FF686B] transition duration-300'
                }
                key={route.link}
                to={route.link}
              >
                {route.text}
              </NavLink>
            ))}
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default NavBar;
