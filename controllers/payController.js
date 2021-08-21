const cheerio = require('cheerio');
const axios=require('axios');
const url='https://www.ato.gov.au/Rates/Individual-income-tax-rates/';
const mongoose = require('mongoose')
const taxThreshold = require('./../models/taxThresh')


axios(url)
  .then(response =>{
    const html=response.data;
    const $ = cheerio.load(html)//pass the pages html to cheerio to parse
    const data = $('.widgetBody').text()
    // console.log(lowestThresh);
    let re = /Australian residents[\s\S]*?\$[\s\S]*?Taxable income/g;
    let extract = re.exec(data);
    let incomes = [], deducts = [], m;

    for (re = /– \$(.*?)\n/g; m = re.exec(extract); incomes.push(m[1]));
    for (re = /(.*?) cents/g; m = re.exec(extract); deducts.push(m[1]));

    incomes = incomes.map(n => +n.replace(",", ""));
    deducts = deducts.map(d => d.split(" ").pop()/100);
    console.log(incomes);
  })
  .catch(console.error);

const postBrackets= async(req, res)=>{
    // var currentTime = Date.now()
    // const newThresh = new taxThreshold({incomes, deducts})
    // try{
    //     let result = newThresh.save()
    //     }
    // catch(err){
    //     return false;
    // }
    res.send([incomes, deducts])
}
module.exports=postBrackets