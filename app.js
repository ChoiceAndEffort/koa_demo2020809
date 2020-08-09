const Koa=require('koa');
const router =require('./src/main/router.js')
const app = new Koa();
app.use(router.routes()).use(router.allowedMethods());
module.exports = app;



