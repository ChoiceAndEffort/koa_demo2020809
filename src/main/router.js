const Router = require('koa-router');
const router =new Router()
router.use('/api', require('./controller/home.js'))
router.use('/api', require('./controller/login.js'))
module.exports=router