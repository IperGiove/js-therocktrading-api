const { Client } = require('./client');


function isRequired (argumentName) {
    throw new Error(`${argumentName} is a required argument.`);
}


class TheRockTrading extends Client {
    constructor(API, API_SECRET, stagin=false) {
        super(API, API_SECRET, stagin);
    }

    currencies() {
        let url = this.url_creator("/currencies");
        return this.requests_and_parse("GET", url);
    }

    balance(fund_id = isRequired("fund_id")) {
        let url = this.url_creator(`/balances/${fund_id}`);
        return this.requests_and_parse("GET", url);
    }

    ohlc_statistics(fund_id = isRequired("fund_id"), params) {
        let url = this.url_creator(`/funds/${fund_id}/ohlc_statistics`, params);
        return this.requests_and_parse("GET", url);
    }

}

module.exports = {TheRockTrading};