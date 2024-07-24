import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Navbar.scss';
import { images } from '../../constants';

// Import your section components
import { About, Footer, Header, Skills, Work } from '../../container';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Router>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills', 'archive', 'contact'].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <Link to={`/${item}`} onClick={() => setToggle(false)}>
                  {item}
                </Link>
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
                      <Link to={`/${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Define your routes here */}
      <Routes>
        <Route
          path="https://my-porfolio-nine.vercel.app//home"
          element={<Header />}
        />
        <Route
          path="https://my-porfolio-nine.vercel.app//about"
          element={<About />}
        />
        <Route
          path="https://my-porfolio-nine.vercel.app//work"
          element={<Work />}
        />
        <Route
          path="https://my-porfolio-nine.vercel.app//skills"
          element={<Skills />}
        />
        <Route path="https://archive-phi-six.vercel.app//archive" />
        <Route
          path="https://my-porfolio-nine.vercel.app//contact"
          element={<Footer />}
        />
      </Routes>
    </Router>
  );
};

export default Navbar;
