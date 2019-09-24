var express=require('express');
var router=express.Router();
/*router.get('/',function(req,res,next){
   res.send('api');
});*/

var customersRouter=require('./customer');

router.use('/customer',customersRouter);
module.exports=router;