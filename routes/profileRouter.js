const express = require("express");
const bodyParser = require('body-parser');
const profileRouter = express.Router();
const jobController = require("../controllers/jobController")

const urlencodedParser = bodyParser.urlencoded({extended: false})

profileRouter.get("/", (req, res) => {
    res.render(__dirname.replace('/routes', '/views/profileView.ejs'))
});

profileRouter.post('/', urlencodedParser, addJob);

function addJob(req, res) {
    jobController.createJob(req.body)
        .then(() => res.json({}))
        .catch(err => console.log(err));
}

// handle user posts
// profileRouter.post('/', urlencodedParser, (req, res) => {
//     //console.log(req.body);
//     jobController.createJob(req, res)
// })

module.exports = profileRouter;