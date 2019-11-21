const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ps6app', {useNewUrlParser: true}, function(err, client){
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

let apiSchema = new mongoose.Schema({
    name: String,
    response: String
});

let apiQuote = mongoose.model('apiQuote', apiSchema);

module.exports = apiQuote;