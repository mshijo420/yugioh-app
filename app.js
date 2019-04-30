/*
     YU-GI-OH
    ---APP---
    mshijo420
*/
const express = require('express');

const yugiohController = require('./controllers/yugiohController');

const app = express();

//set up the template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
yugiohController(app);

//listen to port
app.listen(3000);
console.log('yu-gi-oh app online! go to localhost:3000/yugiohapp');
console.log('ctrl + c = server down');