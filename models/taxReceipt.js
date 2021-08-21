// Step 3 - this is the code for ./models.js
 
var mongoose = require('mongoose');
 
var taxReceiptSchema = new mongoose.Schema({
    name: String,
    date: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
const taxReceipt = mongoose.model("taxReceipt", taxReceiptSchema, "taxReceipt")
module.exports = {taxReceipt}