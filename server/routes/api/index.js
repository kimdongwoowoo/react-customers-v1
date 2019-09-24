var express=require('express');
var router=express.Router();
/*router.get('/',function(req,res,next){
   res.send('api');
});*/

var customersRouter=require('./customers');

router.use('/customers',customersRouter);
module.exports=router;