const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
require('./models/db');
const fs = require("fs");
const multer = require("multer");
const path = require('path')

const taxReceipt = require("./models/taxReceipt")


const taxReceiptRouter = require('./routes/taxReceiptRouter')


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set("view engine", "ejs");


// simple route
app.get("/", (req, res) => {
    res.send('<h1>PINK APP</h1>')
  });
  
//Handle user requests
app.use('/tax-receipt', taxReceiptRouter)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });


const upload = multer({ storage: storage });

app.get("/test",  (req, res) => {
    res.render("upload");
});

app.post("/uploadPhoto", upload.single("myImage"), (req, res) => {
    const obj = {
        img: {
            data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.filename)),
            contentType: "image/png/jpeg"
        }
    }
    const newImage = new taxReceipt({
        image: obj.img
    });
    newImage.save((err) => {
        err ? console.log(err) : res.redirect("/");
    });
});

app.get("/all",  (req, res) => {
    taxReceipt.find({}, (err, images) => {
      if (err) {
          console.log(err);
          res.status(500).send("An error occurred", err);
      } else {
          res.render("viewAllUploads", {images: images});
      }
    });
  });

app.listen(3000, () => {
    console.log('The pink app is listening on port 3000!')
})
module.export = app;