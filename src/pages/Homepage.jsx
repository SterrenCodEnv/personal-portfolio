import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Layout from '../components/Layout/Layout';
import About from '../components/Sections/About';
/* import Testimonials from '../components/Sections/Testimonials'; */
import Clients from '../components/Sections/Clients';
import Herosection from '../components/Sections/Herosection';
import SectionHeading from '../components/Items/SectionHeading';
/* import Funfacts from '../components/Sections/Funfacts'; */
import Services from '../components/Sections/Services';
import Experiences from '../components/Sections/Experiences';
/* import Portfolios from '../components/Sections/Portfolios'; */
import Contact from '../components/Sections/Contact';

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </Element>

      {/* <Element name="section-funfacts">
        <Funfacts />
      </Element> */}

      <Element name="section-services">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Technologies" />
          <Services />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Experience" />
          <Experiences />
        </section>
      </Element>

      {/* Puede usarse al concluir un proyecto */}
      {/* <Element name="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portfolio" />
          <Portfolios />
        </section>
      </Element>
    */}

      {/* Puedo pedir referencias cuando termine un proyecto */}
      {/* <Element name="section-testimonials">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Testimonials" />
          <Testimonials />
        </section>
      </Element> */}

      <Element name="section-clients">
        <Clients />
      </Element>

      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch with me" />
          <Contact />
        </section>
      </Element>
    </Layout>
  );
}

export default Homepage;
