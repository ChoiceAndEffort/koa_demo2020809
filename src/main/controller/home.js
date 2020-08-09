const Router = require('koa-router');
const homeRouter = new Router();
homeRouter.get('/home',async(ctx,next)=>{
  ctx.body='<h1>这是主页</h1>';
  next()
})
module.exports=homeRouter.routes();