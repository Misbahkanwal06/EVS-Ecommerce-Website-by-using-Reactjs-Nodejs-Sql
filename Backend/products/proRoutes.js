



const proController = require("./proController");

const proRoutes = (fastify, options, done) => {
    fastify.post('/create', proController.proCreate);
    fastify.get('/all-products/:id', proController.getProducts);
    done();
}

module.exports = proRoutes;


