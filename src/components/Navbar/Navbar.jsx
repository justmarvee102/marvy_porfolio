import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // Define the external URLs for your portfolio sections
  const externalLinks = {
    home: 'https://my-porfolio-nine.vercel.app/home',
    about: 'https://my-porfolio-nine.vercel.app/about',
    work: 'https://my-porfolio-nine.vercel.app/work',
    skills: 'https://my-porfolio-nine.vercel.app/skills',
    archive: 'https://archive-phi-six.vercel.app/',
    contact: 'https://my-porfolio-nine.vercel.app/contact',
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'archive', 'contact'].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a
                href={externalLinks[item]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'archive', 'contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={externalLinks[item]}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
