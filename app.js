require('rootpath')();
const cors = require('cors');
const jwt = require('./models/jwt');
const express = require('express')
const app = express();
const errorHandler = require('./models/error-handler');

require('./models/db');


const taxReceiptRouter = require('./routes/taxReceiptRouter')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(jwt());
app.use('/users', require('./routes/userRouter'));
app.use(errorHandler);

// simple route
app.get("/", (req, res) => {
    res.send('<h1>IT Project 2021 Semester 2 Capstone</h1>')
  });
  
//Handle user requests
app.use('/tax-receipt', taxReceiptRouter)


app.listen(3000, () => {
    console.log('The pink app is listening on port 3000!')
})
