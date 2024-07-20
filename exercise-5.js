function crypto_calculator(money, bitcoin_price, ethereum_price, litecoin_price) {
    if (money <= 0) {
        console.log("Insufficient funds");
        return [0, 0, 0];
    }

    let bitcoin_max, ethereum_max, litecoin_max = 0;

    function coin_max(price, max) {
        if (price < 0) {
            max = undefined;
        } else if (price == 0) {
            max = 0;
        } else {
            max = Math.floor(money / price);
        }
        return max; // returns the value but doesn't store it in a variable. Make sure to do that yourself
    }

    bitcoin_max = coin_max(bitcoin_price, bitcoin_max);
    ethereum_max = coin_max(ethereum_price, ethereum_max);
    litecoin_max = coin_max(litecoin_price, litecoin_max);

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