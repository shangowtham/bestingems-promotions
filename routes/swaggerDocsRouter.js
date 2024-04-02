const express = require('express');
const router = express.Router();
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const openApiSpecification = yaml.load('./swagger.yaml');

router.get('/swagger', (req, res) => {
    res.json(openApiSpecification);
});

module.exports = router;