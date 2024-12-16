import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const herosectionData = {
  name: '',
  aboutMe:
    'Puedes descargar mi CV en español o contactarme para más información.',
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      /* style={{ backgroundImage: 'url(/images/hero.jpg)' }} */
    >
      <video className="video-tag" autoPlay loop muted>
        <source src={"/images/typing.mp4"} type="video/mp4" />
      </video>

      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4 animate__animated animate__lightSpeedInLeft">
          ¡SALUDOS! 👋🏻 {herosectionData.name}
          {/* <span className="dot"></span> */}
        </h1>
        <p className="mb-4 animate__animated animate__lightSpeedInRight">
          {herosectionData?.aboutMe}
        </p>

        {/* <a
          target={'_blank'}
          href={'media/CV-SterrenJuanIgnacio[EN].pdf'}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>English CV
        </a> */}

        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>

        <a
          target={"_blank"}
          href={"media/CV-SterrenJuanIgnacio[SP].pdf"}
          className="btn btn-default btn-lg mr-3" rel="noreferrer"
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
          <i className="fa-solid fa-paper-plane"></i>Contáctame
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
