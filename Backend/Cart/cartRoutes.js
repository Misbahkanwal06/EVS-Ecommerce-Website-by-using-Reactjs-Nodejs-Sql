


const cartController = require("./cartController");

const cartRoutes = (fastify, options, done) => {
    fastify.post('/create', cartController.createCart);
    fastify.get('/getcart/:custId', cartController.getCart);
    fastify.post('/updatecart/:custId/:prodID', cartController.updateCart);    // By  params
    fastify.delete('/deletecart/:custId/:prodID', cartController.deleteCart);
    // fastify.post('/updatecart/',cartController.updateCart);   // By queryParameters.
    done();
}

module.exports = cartRoutes;

