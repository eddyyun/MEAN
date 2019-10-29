const express = require('express');
const router = express.Router();
const request =  require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    request({
        uri: "https://api.kanye.rest",
        json: true
    }, function(error, response, body)
    {
        if (!error && response.statusCode === 200) {
            res.render('ps4', body);
        } else {
            console.log(error);
        }
    })
});
    // https.get('https://api.kanye.rest', (resp) => {
    //     resp.on('end', () => {
    //         let apicall = JSON.parse(end);
    //     });
    // });
    //

module.exports = router;
