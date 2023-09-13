/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

const headerData = {
  name: 'Juan Sterren',
  designation: 'Software Developer',
  imageThumb: '/images/logo.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/sterrenjuan/',
    instagram: 'https://www.instagram.com/juan.sterren/',
    github: 'https://github.com/SterrenCodEnv',
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState('');
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  return (
    <>
      <div
        className={
          toggleHeader
            ? 'mobile-header py-2 px-3 mt-4 push'
            : 'mobile-header py-2 px-3 mt-4'
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? 'left float-left shadow-dark open'
            : 'left float-left shadow-dark'
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-center flex-column">
          <Link className="d-flex align-items-center flex-column" to="/">
            <img
              className="image-logo"
              src={headerData.imageThumb}
              alt={headerData.name}
            />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === '/' ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="fa-regular fa-handshake"></i>Hi!
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="fa-regular fa-handshake"></i>Hi!
                  </Link>
                )}
              </li>
              <li>
                {currentPath === '/' ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="fa-regular fa-address-card"></i>About me
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="fa-regular fa-address-card"></i>About me
                  </Link>
                )}
              </li>
              <li>
                {currentPath === '/' ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="fa-solid fa-laptop-code"></i>Technologies
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="fa-solid fa-laptop-code"></i>Technologies
                  </Link>
                )}
              </li>
              <li>
                {currentPath === '/' ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-experiences"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="fa-solid fa-user-graduate"></i>Courses
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="fa-solid fa-user-graduate"></i>Courses
                  </Link>
                )}
              </li>
              <li>
                {currentPath === '/' ? (
                  <ScrollLink
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <i className="fa-regular fa-paper-plane"></i>Contact
                  </ScrollLink>
                ) : (
                  <Link to="/">
                    <i className="fa-regular fa-paper-plane"></i>Contact
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.linkedin}>
                    <FaLinkedinIn />
                  </a>
                </li>
              )}
              {!headerData.social.github ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.github}>
                    <FaGithub />
                  </a>
                </li>
              )}
              {!headerData.social.facebook ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.facebook}>
                    <FaFacebookF />
                  </a>
                </li>
              )}
              {!headerData.social.instagram ? null : (
                <li className="list-inline-item">
                  <a target="_blank" href={headerData.social.instagram}>
                    <FaInstagram />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
