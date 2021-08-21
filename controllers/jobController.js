const mongoose = require("mongoose")

// Set paramaters?

// Link to Job Model
const Job = mongoose.model("Job")

//          functions         //



//          requests         //

const createJob = async (req, res) => {
    const newJob = new Job({
        user_id: req.params.user_id,
        job_title: req.params.job_title,
        standard_pay_rate: req.params.standard_pay_rate,
    })
}

const deleteJob  =async (req, res) => {
    //do nothing
}

const jobSchema = new Schema({
    user_id: {type: String, required: true},
    job_title: {type: String, required: true},
    company_name: {type: String, required: false},
    role: {type: String, required: false},
    // pay rates will be stored in dollars per hour
    standard_pay_rate: {type: Number, required: true},
    pay_period: {
        type: String, 
        enum: ["WEEKLY", "FORTNIGHTLY", "SEMIMONTHLY", "MONTHLY"], 
        default: "FORTNIGHTLY"}
})
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
module.exports = {}