const express = require('express')
const app = express();

require('./models/db');


const taxReceiptRouter = require('./routes/taxReceiptRouter')
const profileRouter = require('./routes/profileRouter')

// simple route
app.get("/", (req, res) => {
    res.send('<h1>IT Project 2021 Semester 2 Capstone</h1>')
  });
  


//Handle user requests
app.use('/tax-receipt', taxReceiptRouter)

app.use('/profile', profileRouter)
app.use('/profile/job', profileRouter)

app.listen(3000, () => {
    console.log('The pink app is listening on port 3000!')
})
