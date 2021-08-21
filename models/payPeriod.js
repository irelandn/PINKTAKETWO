const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payPeriodSchema = new Schema({
    payPeriod_id: {type: String, required: true},
    job_id: {type: String, required: true},
    start_date: {type: Date, required: true}
})

const PayPeriod = mongoose.model("payPeriod", payPeriodSchema);
module.exports = PayPeriod;