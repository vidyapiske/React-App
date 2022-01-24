var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){

    let dataArray = [
        { name: "Vidya", age:12 },
        { name: "Vidya", age:12 },
        { name: "Vidya", age:12 }
    ];
  
   res.json({
       data: dataArray

   });   

})
module.exports = router;