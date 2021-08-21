 
var mongoose = require('mongoose');
 
var taxSchema = new mongoose.Schema({
    thresholds:{type: [Number], required: true},
    minAmount:{type:[Number], required:true}
});
 
//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('Image', taxSchema);