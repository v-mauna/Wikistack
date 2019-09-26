const router = require('express').Router();
const userList = require('../views/userList');
const userPages = require('../views/userPages');
const {main}  = require('../views');
const { db }  = require('../models/index');


router.get('/', (req,res,next)=>{
    res.redirect('/wiki');
});

module.exports =  router ;

