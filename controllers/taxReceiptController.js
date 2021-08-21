// const mongoose = require("mongoose")

const taxReceipt = require('../models/taxReceipt')


//get all tax receipts
const getAllReceipts= async(req, res)=>{
  try{
    const allReceipts=await taxReceipt.find({name:true, date:true, img:true}).lean()
    if(!allReceipts){
      res.status(404)
      return res.send("No images found")
    }
    res.render('submitTaxReceipt')
  }catch(err){
    console.log(err)
    res.send("error has occurred, please go back")
    res.render('submitTaxReceipt')
  }
}

module.exports = {getAllReceipts}