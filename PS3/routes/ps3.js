var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { string: 'Hey now' });
});

router.post('/c', function(req,res,next){
    let value1 = req.body.string;
    let value2 = req.body.string.length;
    res.render('ps3p2', {string: value1, length: value2});
});

module.exports = router;
