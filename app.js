const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const routes = require('./routes/routes');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/', require('./routes/routes'));


const port = 3000;

app.listen(port, ()=>console.log(`Listening on ${port}`));