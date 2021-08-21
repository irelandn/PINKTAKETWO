
const express = require("express");

const taxReceiptRouter = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose')
 
var fs = require('fs');
var path = require('path');
require('dotenv/config');
const taxReceiptController = require("../controllers/taxReceiptController");

var taxReceipt = require("../models/taxReceipt")

var multer = require('multer');
 
const  imageStorage = multer.diskStorage({
    destination: 'uploads' ,
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()
        + path.extname(file.originalname))
    }
});
 
const upload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

taxReceiptRouter.get('/', (req, res) => {
    taxReceipt.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render("submitTaxReceipt")
        }
    });
});

taxReceiptRouter.post('/uploads', upload.single('image'), (req, res) => {
    
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    taxReceipt.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.redirect('/all');
        }
    });
  });

  taxReceiptRouter.get("/uploads", (req, res) => {
    res.send('<h1>success</h1>')
  });


module.exports = taxReceiptRouter;