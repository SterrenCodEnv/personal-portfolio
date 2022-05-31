/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Slider from 'react-slick';

const clientsData = [
  {
    id: 1,
    image: 'images/clients/1.png',
    url: 'https://rooftop.dev/',
  },
  {
    id: 2,
    image: 'images/clients/2.png',
    url: 'https://grupoprominente.com/',
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
