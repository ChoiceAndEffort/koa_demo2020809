// const Router = require('koa-router');
// const koaBodyparser=  require('koa-bodyparser');
// let loginRouter = new Router({
//   prefix: '/api'
// });
// loginRouter.post('/login',koaBodyparser(),async ctx=>{
//   let postData= ctx.request.body
//   console.log(postData,555555555)
//   ctx.body='来拿数据'
// })
const Router = require('koa-router');
const koaBodyparser=  require('koa-bodyparser');
let loginRouter = new Router();

loginRouter.post('/login',koaBodyparser(), async(ctx,next)=>{
  let postData= ctx.request.body
  console.log(postData)
  ctx.body=`<h1>你好，${postData}</h1>`;
})
module.exports=loginRouter.routes()