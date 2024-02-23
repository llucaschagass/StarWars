const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API de Filmes Star Wars',
      version: '1.0.0',
      description: 'API para criar, ler, atualizar e excluir filmes Star Wars',
    },
    servers: [
      { url: 'http://localhost:3333' },
    ],
  },
  apis: ['./index.js'], 
  definitions: {
    Film: {
      type: 'object',
      required: ['title', 'description', 'imageurl', 'trailerurl'],
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        imageurl: { type: 'string' },
        trailerurl: { type: 'string' },
      },
    },
  },
};

module.exports = swaggerJSDoc(options);