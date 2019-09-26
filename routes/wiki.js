
const wikiPage = require('../views/wikipage');
const main = require('../views/main');
const index = require('../views/index');
const addPage = require('../views/addPage');
const editPage = require('../views/editPage');
const { Page } = require('../models');
const router = require('express').Router();

router.get('/', (req,res,next)=>{
    res.send(main());
});

router.post('/', async (req,res,next)=>{
    const title = req.body.title;
    const content = req.body.pageContent;
    const page = new Page({
        title: '${title}',
        content: `${content}`
});
try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});


router.get('/add', (req,res,next)=>{
    res.send(addPage());
});


module.exports = router;