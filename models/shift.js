const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
    shift_id: {type: String, required: false},
    payPeriod_id: {type: String, required: true},
    date: {type: Date, required: true},
    start_time: {type: Number, required: true},
    end_time: {type: Number, required: true},
    confirmed: {type: Boolean, default: true}
})

const Shift = mongoose.model("shift", shiftSchema);
module.exports = Shift