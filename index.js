const inquirer = require('inquirer');
const stockBuy = require('./stockBuy');
const bankPromotion = require('./bankPromotion');

let balance = 10;

const modules = [
  stockBuy,
  bankPromotion
];

async function start() {
  let mi = Math.random() < 0.5 ? 0 : 1;
  balance += await modules[mi]()
  console.log(`New balance  $${balance}`)
  start();
}

start();




