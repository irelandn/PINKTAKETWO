const express = require("express");
const bodyParser = require('body-parser');
const profileRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false})

profileRouter.get("/", (req, res) => {
    //res.sendFile(__dirname.replace('/routes', '/views/profileView.ejs'))
    res.render(__dirname.replace('/routes', '/views/profileView.ejs'))
    //res.render('profileView')
});

// handle user posts
profileRouter.post('/', urlencodedParser, (req, res) => {
    console.log(req.body);
})

module.exports = profileRouter;