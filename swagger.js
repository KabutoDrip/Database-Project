const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Temple API',
  },
  host: 'cse341-cbjm.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
// ...
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js'); // Your project's root file
  });
// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });