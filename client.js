CryptoJS = require("crypto-js");


const ENDPOINT_STAGING = "https://api-staging.therocktrading.com"
const ENDPOINT= "https://api.therocktrading.com"
const HOST = "/v1"


function isRequired (argumentName) {
    throw new Error(`${argumentName} is a required argument.`);
}

  
/*
Struct Client with API and API_SECRET
*/
class Client {
    constructor(API, API_SECRET, staging=false) {
        this.API = API;
        this.API_SECRET = API_SECRET;
        this.staging = staging;
        this.url_base = this.url_base_creator();
    }

    url_base_creator() {
        if (this.staging === true) {
            return ENDPOINT_STAGING + HOST
        } else {
            return ENDPOINT + HOST
        }
    }

    url_creator(url_final = isRequired("ururl_finall")) {
        return this.url_base + url_final
    }

    signature_creator(message = isRequired("message")) {
        return CryptoJS.HmacSHA512(message, this.API_SECRET).toString(CryptoJS.enc.Sha512);
    }

    header_creator(url = isRequired("url")) {
        let nonce = new Date().getTime();
        return {
            "Content-Type": "application/json",
            "X-TRT-KEY": this.API,
            "X-TRT-SIGN": this.signature_creator(nonce+url),
            "X-TRT-NONCE": nonce
        };
    }

    async requests_and_parse(
            http_method = isRequired("http_method"), 
            url = isRequired("url"), 
            query
        ) {
            let options = {
                method: http_method,
                headers: this.header_creator(url),
                body: JSON.stringify(query)  
            };
            console.log(options)

            return await (await fetch( url = url, options)).json();
        }
}


module.exports = {Client};
