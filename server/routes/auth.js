var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send({ 
        responseCode : 200,
        responseMessage : 'Success!',
        data : {
            name : "Chikku",
            email : "chikkuspanicker@gmail.com",
            accessToken : "asdfgh12345"
        }
     });
});

module.exports = router;