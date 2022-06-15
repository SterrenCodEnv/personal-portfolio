import React from 'react';
import Experience from '../Items/Experience';

const experiencesData = [
  {
    id: 1,
    year: '2022',
    degree: 'React PRO: Update skills (27h)',
    content: 'In progress...',
  },
  {
    id: 2,
    year: '2022',
    degree: 'React: Beginner to expert - Hooks and MERN Edition 2022 (54h)',
    content: 'In progress..',
  },
  {
    id: 3,
    year: '2022',
    degree: 'NestJs: Microservices with NestJs, AWS and Docker (8h)',
    content:
      'https://www.udemy.com/certificate/UC-b8c2afdb-3fba-4e40-afdc-72dc222ad6c9',
  },
  {
    id: 4,
    year: '2021',
    degree: 'Introduction to web development - Backend (64h)',
    content: 'Dictated by Rooftop Academy (certificate in my LinkedIn profile)',
  },
  {
    id: 5,
    year: '2021',
    degree: 'Node: Beginner to expert - 2021 edition (28h)',
    content:
      'https://www.udemy.com/certificate/UC-bebdad55-44a8-448d-8ac4-b7eadc8ccb48',
  },
  {
    id: 6,
    year: '2021',
    degree: 'Flutter designs and animations (15h)',
    content:
      'https://www.udemy.com/certificate/UC-e048f065-6e83-4c4d-a04d-2385436665a1',
  },
  {
    id: 7,
    year: '2021',
    degree: 'Flutter: Beginner to expert - IOS and Android (35h)',
    content:
      'https://www.udemy.com/certificate/UC-1bf7f281-da05-45c6-b0ef-7ead247f8e09',
  },
  {
    id: 8,
    year: '2018',
    degree: 'Angular and Symfony 3.3 (10h)',
    content: 'https://www.udemy.com/certificate/UC-63C73KQX',
  },
  {
    id: 9,
    year: '2017',
    degree: 'Angular - Beginner to expert (14h)',
    content: 'https://www.udemy.com/certificate/UC-63C73KQX',
  },
  {
    id: 10,
    year: '2017',
    degree:
      'Development web with JavaScript, Angular, Node JS and MongoDB (17h)',
    content: 'https://www.udemy.com/certificate/UC-3H17OW7R',
  },
  {
    id: 11,
    year: '2017',
    degree: 'FlexBox: Introduction (2h)',
    content: 'https://www.udemy.com/certificate/UC-OLAWJTJ9',
  },
  {
    id: 12,
    year: '2017',
    degree: 'Sass: Introduction (44min)',
    content: 'https://www.udemy.com/certificate/UC-WTD54BL8',
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
