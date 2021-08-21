// Step 3 - this is the code for ./models.js
 
var mongoose = require('mongoose');
 
var taxReceiptSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
const allReceipts = mongoose.model("allReceipts", taxReceiptSchema)
module.exports = allReceipts