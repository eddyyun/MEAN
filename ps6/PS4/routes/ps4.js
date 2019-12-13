const express = require('express');
const router = express.Router();
const request =  require('request');
const mongoose = require('mongoose');

/* setting up mongo with mongoose */
let db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/ps6app', {useNewUrlParser: true});

let apiSchema = new mongoose.Schema({
    name: String,
    response: String
});

let apiQuote = mongoose.model('apiQuote', apiSchema);


router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

/* GET home page. */
router.get('/', function(req, res) {
    request({
        uri: "https://api.kanye.rest",
        json: true
    }, function(error, response, body)
    {
        if (!error && response.statusCode === 200) {
            apiQuote.countDocuments({name: 'kanye'}, function(err,count){
                //console.log("this is count" + count)
                if(count>0){
                    apiQuote.findOne({name: "kanye"}, {'_id':0, 'response': 1}, function(err, kquote){
                        //console.log("kquote" + kquote)
                        let ycache = "yes";
                        //res.render('ps4', {quote: kquote.response, cache: ycache})
                        res.send([{name: "kanye", response: kquote.response},{name: "kanye", response: kquote.response}])
                    });
                }
                else{
                    let kanye = new apiQuote({name: 'kanye', response: body.quote});
                    kanye.save(function (err, kanye) {
                        if (err) return console.error(err);
                       });
                    let ncache = "no";
                    //res.render('ps4', {quote: body.quote, cache: ncache});
                    res.send([{name: "kanye", response: body.quote},{name: "kanye", response: body.quote}])
                }
            });

        }
        else {
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
