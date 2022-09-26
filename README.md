# The Rock Trading JavaScript Library 
*TheRockTrading JavaScript Library to communicate with JSON REST API (current version -> v1)*


# Features
- Unofficial implementation
- Place orders
- Wallet managment 
- Market data


## Installation
...

## Quickstart

Register an account with [The Rock Trading](https://www.therocktrading.com/)
or [The Rock Trading Staging](https://www.staging-therocktrading.com/).

Go to settings page and get the API and APY SECRET keys.
If you want to use the staging set `staging=True`.

```js
const { TheRockTrading } = require('./therocktrdaing');


let trt = new TheRockTrading(API="API", API_SECRET="API_SECRET");
console.log(trt)

let request_value = trt.currencies()

request_value.then(function(result) {
    console.log(result)
})
```

# Examples
...

You can find the full documentation for the endpoints [here](https://api.therocktrading.com/doc/v1/index.html#api-Account_API-Currency_withdraw_limits)
