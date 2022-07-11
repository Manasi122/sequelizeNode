// swagger.js
module.exports = {
    openapi: '3.0.0',
    info: {
      title: 'Sequelize NodeJS API for Shipyaari',
      version: '1.0.0',
      description:
        'This is a REST API application made with NodeJS. It retrieves all the user end data from sequelize database.',
      contact: {
        name: 'STS',
        email: 'info@sts.in',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],    
} 