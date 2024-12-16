import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content: `Tuve el placer de trabajar estrechamente con Juani en Janis, donde ocupamos roles similares en diferentes equipos de desarrollo.
    Durante nuestra colaboración, Janis demostró un compromiso excepcional con la empresa y su equipo. Su capacidad para trabajar en múltiples proyectos simultáneamente y su disposición para colaborar con otros equipos fueron notables. Siempre se mostró dispuesto a compartir conocimientos y brindar asesoramiento, lo que fue fundamental para el éxito de nuestros proyectos.
    Juani posee un sólido conocimiento técnico y ha implementado desarrollos de software utilizando las mejores prácticas, como principios SOLID y Clean Code, entre otros. Destaco su habilidad para enfrentar desafíos técnicos y encontrar soluciones efectivas, lo cual contribuyó significativamente al cumplimiento de nuestros objetivos. Además, su experiencia en la configuración y administración de infraestructura en AWS ha sido crucial para la escalabilidad y el rendimiento óptimo de nuestras aplicaciones.
    Es un placer recomendar a Juani. Su dedicación, habilidades técnicas y capacidad para trabajar de manera colaborativa lo convierten en un activo invaluable para cualquier equipo y empresa que busque excelencia en el desarrollo de software y la gestión de infraestructura en la nube.`,
    authorImage: "images/testimonials/1.png",
    authorName: "Samir Mahmud",
    authorStatus: "Backend Developer | Janis Commerce",
    authorProfile: "https://www.linkedin.com/in/samir-mahmud-4265a31b7/",
  },
  {
    id: 2,
    content: `Tuve la suerte de trabajar con Juan Ignacio tanto como compañero como siendo su líder. Siempre se destacó por su iniciativa y su constante interés en aprender y aportar valor a la empresa.
    Además de su experiencia en backend, también cuenta con un background en frontend que lo hace una persona valiosa para cualquier equipo.
    Juani siempre demostró un alto nivel de compañerismo, profesionalismo y compromiso con sus responsabilidades y con el equipo. Su capacidad para colaborar y su disposición para ayudar a quien lo necesite son cualidades que lo distinguen.
    Más allá de sus habilidades técnicas, destaco su calidad humana. Juan Ignacio siempre está dispuesto a brindar apoyo de cualquier forma posible, lo que lo convierte en un activo invaluable para cualquier organización.`,
    authorImage: "images/testimonials/2.png",
    authorName: "José Ignacio Calandra",
    authorStatus: "Team Leader | Janis Commerce",
    authorProfile: "https://www.linkedin.com/in/calandrajosei/",
  },
  {
    id: 3,
    content: `Juan tiene un gran potencial para roles en empresas tecnológicas avanzadas, startups innovadoras y proyectos de consultoría de alta demanda.
    Su capacidad para trabajar tanto en frontend como en backend, combinada con su experiencia en gestión de proyectos y metodologías ágiles, lo posiciona como un candidato ideal para liderar equipos de desarrollo y contribuir al crecimiento tecnológico de cualquier organización. La página web profesional demuestra su habilidad para comunicar su perfil de manera efectiva, lo que es crucial para atraer oportunidades laborales y colaboraciones estratégicas. Feliz de haber trabajo con vos, desprende garra y la energía (:`,
    authorImage: "images/testimonials/3.png",
    authorName: "Jennifer Mallo",
    authorStatus: "Global Head Hunter | Janis Commerce",
    authorProfile: "https://www.linkedin.com/in/jennifer-mallo/",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
