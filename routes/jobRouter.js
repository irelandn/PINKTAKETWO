const express = require("express");
const jobRouter = express.Router();
const jobController = require("./../controllers/jobController");

jobRouter.get("/", (req, res) => {
    res.send('<h1>Job page</h1>')
});

module.exports = jobRouter;