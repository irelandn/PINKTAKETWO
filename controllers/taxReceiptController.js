// const mongoose = require("mongoose")
const TaxReceipt = require("../models/taxReceipt")
// const multer = require("multer")
// const fs = require('fs')


const getAllReceipts=async(req, res)=>{
  try {
      const receipts = await TaxReceipt.find()
      return res.send(receipts)
  } 
  catch (err) 
  {
      res.status(400)
      return res.send("Database query failed")
  }
}

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//       callback(null, "uploads");
//     },
//     filename: (req, file, callback) => {
//       callback(null, Date.now() + "-" + file.originalname);
//     },
//   });
  
//   const upload = multer({ storage: storage });

module.exports = {getAllReceipts}