
const custController = require("./customerController");


const custRoutes = (fastify,options,done)=>{
    fastify.post('/create',custController.createCustomer);
    fastify.post('/login',custController.loginCustomer);
    // fastify.get('/verify',custController.verifyToken);
    // fastify.delete('/delete/:id',stdController.stdDelete);
    done();
}


module.exports = custRoutes;

