import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const herosectionData = {
  name: 'Juan Sterren',
  aboutMe:
    'Hello! I am a FullStack Developer and an advanced student of a Higher Technician in Software Development, in 2016 I started developing my first projects as a frontend developer in a dependency relationship, from 2017 to 2021 my main work activities did not include software development, even so, during those years I took several courses, developed websites for private clients and developed a comprehensive claims system for municipalities and communes using technologies such as Symfony (PHP), Angular 7 (Typescript) and MySQL. I can help you with something? Get in touch with me.',
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      /* style={{ backgroundImage: 'url(/images/hero.jpg)' }} */
    >
      <video className="video-tag" autoPlay loop muted>
        <source src={'/images/typing.mp4'} type="video/mp4" />
      </video>

      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4 animate__animated animate__lightSpeedInLeft">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4 animate__animated animate__lightSpeedInRight">
          {herosectionData.aboutMe}
        </p>

        <a
          target={'_blank'}
          href={'media/CV-SterrenJuanIgnacio[EN].pdf'}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>English CV
        </a>

        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>

        <a
          target={'_blank'}
          href={'media/CV-SterrenJuanIgnacio[SP].pdf'}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>CV Español
        </a>

        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="fa-solid fa-paper-plane"></i>Contact me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
