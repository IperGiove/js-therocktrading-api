const { TheRockTrading } = require('./therocktrdaing');


let trt = new TheRockTrading(API=process.env.TRT_API, API_SECRET=process.env.TRT_API_SECRET);
//console.log(trt);

let request_value = trt.ohlc_statistics(fund_id="BTCEUR", {"after": '2022-09-26T20:30:00.000Z', "period": 60});

request_value.then(function(result) {
    console.log(result)
});