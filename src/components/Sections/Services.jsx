import React from 'react';
import Service from '../Items/Service';

const servicesData = [
  {
    id: 1,
    name: 'Programming Languages',
    content: `Languages I've used include C++, C#, Python, Java, PHP, HTML, CSS, JavaScript, TypeScript, Dart, SQL and others.`,
    icon: 'fa-brands fa-dev',
  },
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
    id: 4,
    name: 'AWS Service',
    content:
      'I have worked with AWS Lambda, Amazon API Gateway, Amazon DynamoDB, Amazon Cognito, Amazon S3, Amazon SNS, Amazon SQS, Amazon EventBridge, AWS Step Functions, DynamoDB and Kinesis Streams.',
    icon: 'fa-brands fa-aws',
  },
  {
    id: 5,
    name: 'React & Native',
    content:
      'Consider this technology suitable for frontend and mobile development given its versatility and adaptation in the market.',
    icon: 'fa-brands fa-react',
  },
  {
    id: 6,
    name: 'PHP Frameworks',
    content: `I have carried out knowledge projects in Symfony and Laravel, although I do not currently use these technologies.`,
    icon: 'fa-brands fa-php',
  },
  {
    id: 7,
    name: `Databases and ORM/ODM`,
    content:
      'I have knowledge in MySQL , MongoDB, PostgreSQL, Firebase, and ORMs like Sequelize, TypeORM, Mongoose, Prisma, Doctrine, Eloquent, and others.',
    icon: 'fa-solid fa-database',
  },
  {
    id: 8,
    name: 'Other Softwares',
    content:
      'Postman, DBeaver, MongoDB Compass, Docker, Android Studio, Visual Studio Code, Adobe XD, Figma and others.',
    icon: 'fa-regular fa-window-restore',
  },
  {
    id: 9,
    name: 'Atlassian Community Softwares',
    content: `I use Jira, Confluence, Bitbucket in the workgroups I participate in.`,
    icon: 'fa-brands fa-atlassian',
  }
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
