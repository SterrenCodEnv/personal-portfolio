import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const aboutData = {
  cvenpath: 'media/CV-SterrenJuanIgnacio[EN].pdf',
  cvsppath: 'media/CV-SterrenJuanIgnacio[SP].pdf',
  image: 'images/logo.png',
  name: 'Juan Sterren',
  location: 'San Guillermo (Sta Fe, AR)',
  birthday: '23 July, 1991',
  email: 'sterrenjuanignacio@gmail.com',
  aboutMe:
    'Hello! I am a FullStack Developer, I have knowledge in Js/Ts and derivative frameworks such as NestJs, Express, Angular, Flutter (Dart) and I am currently taking my first steps with React and React Native. I can help you with something? Get in touch with me.',
};

function About() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a
          target={'_blank'}
          href={aboutData.cvenpath}
          className="btn btn-default mr-3"
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>English CV
        </a>

        <a
          target={'_blank'}
          href={aboutData.cvsppath}
          className="btn btn-default mr-3"
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>CV Español
        </a>

        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="fa-solid fa-paper-plane"></i>Contact me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
