


const path = require('path');
const dbSql = require('./dbs');
const mainRoutes = require('./mainRoutes');

// FASTIFY
const fastify = require('fastify')({
    logger: true
});
fastify.register(require('@fastify/cors'));
//ENV
require('dotenv').config({
    path: path.join(__dirname, `.env.${process.env.NODE_ENV}`)
})
// END POINT
fastify.register(mainRoutes, { prefix: "/api/v1" });

// SQL DATABASE:
const startfastifyService = async () => {
    console.log("haghag");
    try {
        await fastify.listen({ port: process.env.PORT });
        console.log(`server is running on ${process.env.PORT} sqldatabase`);
    } catch (e) {
        console.log(e);
        fastify.log.error(e);
        process.exit(1);
    }
};
startfastifyService();


