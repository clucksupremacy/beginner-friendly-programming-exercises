function crypto_calculator(money, bitcoin_price, ethereum_price, litecoin_price) {
    if (money <= 0) {
        console.log("Insufficient funds");
        return [0, 0, 0];
    }

    let bitcoin_max = 0;
    let ethereum_max = 0;
    let litecoin_max = 0;

    if (bitcoin_price < 0) {
        bitcoin_max = undefined;
    } else if (bitcoin_price == 0) {
        bitcoin_max = 0;
    } else {
        bitcoin_max = Math.floor(money / bitcoin_price);
    }
 
    if (ethereum_price < 0) {
        ethereum_max = undefined;
    } else if (ethereum_price == 0) {
        ethereum_max = 0;
    } else {
        ethereum_max = Math.floor(money / ethereum_price);
    }
 
    if (litecoin_price < 0) {
        litecoin_max = undefined;
    } if (litecoin_price == 0) {
        litecoin_max = 0;
    } else {
        litecoin_max = Math.floor(money / litecoin_price);
    }

    console.log("With ", money, "$ you can buy: ", bitcoin_max, " Bitcoins, ", ethereum_max, " Ethereum, and ", litecoin_max, " Litecoins");

    return [bitcoin_max, ethereum_max, litecoin_max];
}
// tests
// console.log(crypto_calculator(100, 50, 20, 10));
// console.log(crypto_calculator(-100, 50, 20, 10));
// console.log(crypto_calculator(100, 50.25, 20.001, 10));
// console.log(crypto_calculator(100, -50, 20, 10));
// console.log(crypto_calculator(100, -50, 200, 10));
// console.log(crypto_calculator(0, -50, 200, 10));
// console.log(crypto_calculator(1, -50, 200, 10));