const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const { db }  = require('./models/index');
const port = 3000;
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


const init = async () => {
    await db.sync({force:true})
    app.listen(port, ()=> {
        console.log(`Server is listening on ${port}`)
    })
};

init();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);




// app.listen(port, ()=>console.log(`Listening on ${port}`));