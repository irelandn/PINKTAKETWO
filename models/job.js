const mongoose = require("mongoose")
const Schema = mongoose.Schema;

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

const Job = mongoose.model("Job", jobSchema)

module.exports =Job