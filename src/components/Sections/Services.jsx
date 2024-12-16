import React from 'react';
import Service from '../Items/Service';

const servicesData = [
  {
    id: 1,
    name: "Lenguajes de Programación",
    content: `Los lenguajes que he utilizado incluyen C++, C#, Python, Java, PHP, HTML, CSS, JavaScript, TypeScript, Dart, SQL y otros.`,
    icon: "fa-brands fa-dev",
  },
  {
    id: 2,
    name: "JavaScript & TypeScript",
    content:
      "Me he interesado en estas tecnologías para llevar a cabo desarrollos en el backend, frontend y móvil.",
    icon: "fa-brands fa-js",
  },
  {
    id: 3,
    name: "NodeJs",
    content: `He desarrollado servidores web y APIs con Express y NestJS, incluyendo JWT, Google Sign-in y Firebase, Socket.io, integración con mongoDB y PostgreSQL.`,
    icon: "fa-brands fa-node-js",
  },
  {
    id: 4,
    name: "Servicio AWS",
    content:
      "He trabajado con AWS Lambda, Amazon API Gateway, Amazon DynamoDB, Amazon Cognito, Amazon S3, Amazon SNS, Amazon SQS, Amazon EventBridge, AWS Step Functions, DynamoDB y Kinesis Streams.",
    icon: "fa-brands fa-aws",
  },
  {
    id: 5,
    name: "React & Native",
    content:
      "Considero esta tecnología adecuada para el desarrollo frontend y móvil dada su versatilidad y adaptación en el mercado.",
    icon: "fa-brands fa-react",
  },
  {
    id: 6,
    name: "Frameworks de PHP",
    content: `He realizado proyectos en Symfony y Laravel, aunque actualmente no utilizo estas tecnologías.`,
    icon: "fa-brands fa-php",
  },
  {
    id: 7,
    name: `Bases de Datos y ORM/ODM`,
    content:
      "Tengo conocimiento en MySQL, MongoDB, PostgreSQL, Firebase, y ORMs como Sequelize, TypeORM, Mongoose, Prisma, Doctrine, Eloquent y otros.",
    icon: "fa-solid fa-database",
  },
  {
    id: 8,
    name: "Otros Softwares",
    content:
      "Postman, DBeaver, MongoDB Compass, Docker, Android Studio, Visual Studio Code, Adobe XD, Figma y otros.",
    icon: "fa-regular fa-window-restore",
  },
  {
    id: 9,
    name: "Softwares de la Comunidad Atlassian",
    content: `Utilizo Jira, Confluence, Bitbucket en los grupos de trabajo en los que participo.`,
    icon: "fa-brands fa-atlassian",
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
