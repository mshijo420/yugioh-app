const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb+srv://test:test@cluster0-122b9.mongodb.net/yugioh?retryWrites=true', { useNewUrlParser: true });

const duelSchema = new mongoose.Schema({
    duelistOne: String,
    duelistTwo: String,
    lifePoinstDO: Number,
    lifePointsDT: Number,
    duelDate: Date,
    duelWinner: String
});

const Duel = mongoose.model('Duel', duelSchema);

const urlencodedParser = bodyParser.urlencoded({extends: false});

module.exports = function(app) {

    app.get('/yugiohapp', function(req, res) {
        res.render('yugiohapp');
    });
    
    app.post('/yugiohapp', urlencodedParser, function(req, res) {
        const newDuel = Duel(req.body).save((err, data)=> {
            if(err) throw err;
            res.json(data);
        });
    });

    app.get('/duelHistory', function(req, res){
        Duel.find({}, function(err, data){
            if(err) throw err;
            res.render('duelHistory', {duels: data});
        });
    });
    
};