const mongoose = require("mongoose")

// Set paramaters?

// Link to Job Model
//const Job = mongoose.model("Job")
//const Job = require("../models/job");
const db = require('../models/db');
const Job = db.Job;

//          functions         //



//          requests         //

const createJob = async (params) => {
    // add check that the job doesn't already exist
    // const newJob = new Job({
    //     user_id: req.params.user_id,
    //     job_title: req.params.job_title,
    //     standard_pay_rate: req.params.standard_pay_rate,
    // })
    const newJob = new Job(params)

    await newJob.save();

}

const deleteJob  =async (req, res) => {
    //do nothing
}

const getAllJobs = async (req, res) => {
    try {
        // find all jobs associated with the user 
        const jobs = await Job.find({user_id: req.params.user_id})
        return res.send(jobs);
    } catch (err) {
        console.log(err)
    }
}

const getOneJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId)
        // check that the job exists
        if (job == null) {
            res.render("No job found")
        }
        // return the job information
        res.render("job", job);

    } catch (err) {
        console.log(err)
    }
}

// Export the functions provided by the controller
module.exports = {createJob}