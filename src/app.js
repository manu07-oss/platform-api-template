const express = require('express');
const userRoutes = require('./routes/user.routes');
const errorMiddleware = require('./middleware/error.middleware');
const { v4: uuidv4 } = require('uuid');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../openapi.yaml'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const app = express();
app.use(express.json());

// Correlation ID Middleware
app.use((req, res, next) => {
  req.correlationId = uuidv4();
  res.setHeader('X-Correlation-ID', req.correlationId);
  next();
});

app.use('/v1/users', userRoutes);

// Error handler (must be last)
app.use(errorMiddleware);

module.exports = app;
