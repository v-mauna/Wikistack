const router = require('express').Router();
const addPage = require('../views/addPage');
const editPage = require('../views/editPage');
const index = require('../views/index');
const layout = require('../views/layout');
const main = require('../views/main');
const userList = require('../views/userList');
const userPages = require('../views/userPages');
const wikiPage = require('../views/wikipage');


router.get('/', (req,res,next)=>{
    res.send(main());
});

module.exports = router;