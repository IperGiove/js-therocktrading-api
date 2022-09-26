const { TheRockTrading } = require('./therocktrdaing');


let trt = new TheRockTrading(API="API", API_SECRET="API_SECRET");
console.log(trt)

let request_value = trt.currencies()

request_value.then(function(result) {
    console.log(result)
})