const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const routes = require('./routes/routes');
const { db }  = require('./models/index');
const port = 3000;



const init = async () => {
    await db.sync()
    app.listen(port, ()=> {
        console.log(`Server is listening on ${port}`)
    })
};

init();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/', require('./routes/routes'));





// app.listen(port, ()=>console.log(`Listening on ${port}`));