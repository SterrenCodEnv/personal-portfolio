import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const aboutData = {
  cvenpath: "media/CV-SterrenJuanIgnacio[EN].pdf",
  cvsppath: "media/CV-SterrenJuanIgnacio[SP].pdf",
  image: "images/logo.png",
  name: "Juan Sterren",
  location: "San Guillermo (Sta Fe, AR)",
  birthday: "23 julio, 1991",
  email: "sterrenjuanignacio@gmail.com",
  aboutMe: `Soy desarrollador de software semi senior, especializado en la construcción y mantenimiento de aplicaciones backend utilizando tecnologías como Node.js, Express, NestJS, y librerías complementarias. En los últimos años, he trabajado con arquitecturas serverless, diseñando y gestionando microservicios para un sistema SaaS. Además, poseo conocimientos en desarrollo frontend, empleando React, Next.js y Vite.
Mi experiencia en equipos ágiles, bajo metodologías Scrum y Kanban, me ha permitido colaborar de manera efectiva en proyectos dinámicos y orientados a resultados.
`,
};

function About() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Nombre: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Fecha de nacimiento: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Ubicación: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        {/* <a
          target={'_blank'}
          href={aboutData.cvenpath}
          className="btn btn-default mr-3"
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>English CV
        </a> */}
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>

        <a
          target={'_blank'}
          href={aboutData.cvsppath}
          className="btn btn-default mr-3" rel="noreferrer"
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
          className="btn btn-alt mt-md-0"
        >
          <i className="fa-solid fa-paper-plane"></i>Contáctame
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
