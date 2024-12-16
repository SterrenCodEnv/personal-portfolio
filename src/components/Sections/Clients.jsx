/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Slider from 'react-slick';

const clientsData = [
  {
    id: 1,
    image: "images/clients/1.png",
    url: "https://rooftop.dev/",
  },
  {
    id: 2,
    image: "images/clients/2.png",
    url: "https://grupoprominente.com/",
  },
  {
    id: 3,
    image: "images/clients/3.png",
    url: "https://janis.im/",
  },
  {
    id: 4,
    image: "images/clients/4.png",
    url: "https://oblek.com/",
  },
];

function Clients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="shadow-dark background-blue color-white padding-20">
      <h2 className="d-none">Clients</h2>

      <div className="clients-wrapper">
        <Slider {...settings} className="padding-slider">
          {clientsData.map((client) => (
            <div className="client-item" key={client.id}>
              <div className="inner">
                <a target="_blank" href={client.url}>
                  <img src={client.image} alt="client-name" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
