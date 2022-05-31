import React from 'react';
import Service from '../Items/Service';

const servicesData = [
  {
    id: 2,
    name: 'JavaScript & TypeScript',
    content:
      'I have been interested in these technologies to carry out developments in the backend, frontend and mobile.',
    icon: 'fa-brands fa-js',
  },
  {
    id: 3,
    name: 'NodeJs',
    content: `Build web servers and APIs with Express and NestJS, including JWT, Google Sign-in and Firebase, Socket.io, integration with mongoDB and PostgreSQL.`,
    icon: 'fa-brands fa-node-js',
  },
  {
    id: 1,
    name: 'React & Native',
    content:
      'I am currently taking my first steps in frontend and mobile development with these technologies.',
    icon: 'fa-brands fa-react',
  },
  {
    id: 4,
    name: 'Programming Languages',
    content: `Languages I've used include C++, C#, Python, Java, PHP, HTML, CSS, JavaScript, TypeScript, Dart, SQL and others.`,
    icon: 'fa-brands fa-dev',
  },
  {
    id: 5,
    name: 'PHP Frameworks',
    content: `I have knowledge in Symfony and Laravel, but I don't currently work with these technologies.`,
    icon: 'fa-brands fa-php',
  },
  {
    id: 8,
    name: `Databases and ORM/ODM`,
    content:
      'I have knowledge in MySQL , MongoDB, PostgreSQL, Firebase, and ORMs like Sequelize, TypeORM, Mongoose, Prisma, Doctrine, Eloquent, and others.',
    icon: 'fa-solid fa-database',
  },
  {
    id: 9,
    name: 'Other Softwares',
    content:
      'Postman, DBeaver, MongoDB Compass, Docker, Android Studio, Visual Studio Code, Adobe XD, Figma and others.',
    icon: 'fa-regular fa-window-restore',
  },
  {
    id: 6,
    name: 'Atlassian Community Softwares',
    content: `I use Jira, Confluence, Bitbucket in the workgroups I participate in.`,
    icon: 'fa-brands fa-atlassian',
  },
  {
    id: 7,
    name: 'Markdown... Why not?',
    content: `A beautiful README.md is the best presentation of a repository.`,
    icon: 'fa-brands fa-markdown',
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
