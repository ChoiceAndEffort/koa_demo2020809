const app=require('./app')
const port=4000
app.listen(port,()=>{
  console.log(`Koa项目启动成功：http://localhost:${port}`);
})

