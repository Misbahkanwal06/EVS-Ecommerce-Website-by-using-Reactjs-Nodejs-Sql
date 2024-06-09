

const proCatController = require('./proCatController');
const procatRoutes = (fastify,options,done)=>{
    fastify.post('/create',proCatController.catCreate);
    fastify.get('/all-categories',proCatController.getCategories);
    done();
}
module.exports = procatRoutes;