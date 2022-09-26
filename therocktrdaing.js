const { Client } = require('./client');


class TheRockTrading extends Client {
    constructor(API, API_SECRET, stagin=false) {
        super(API, API_SECRET, stagin);
    }

    currencies() {
        let url = this.url_creator("/currencies")
        return this.requests_and_parse("GET", url)
    }

}

module.exports = {TheRockTrading};
