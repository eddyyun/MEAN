var express = require('express');
var router = express.Router();

/* 1.b */
router.get('/', function(req, res, next) {
    res.render('ps3', {string :"you're an all star"});
});


/* 1.c */
router.post('/c', function(req, res){
    let value1 = req.body.string;
    let value2 = req.body.string.length;
    res.render('ps3', {string: value1, string2: value2});
})

module.exports = router;