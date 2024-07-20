function crypto_calculator(money, bitcoin_price, ethereum_price, litecoin_price) {
    if (money <= 0) {
        console.log("Insufficient funds");
        return undefined;
    }

    if (bitcoin_price <= 0) {
       bitcoin_price = undefined;
    }

    if (ethereum_price <= 0) {
        ethereum_price = undefined;
    }

    if (litecoin_price <= 0) {
        litecoin_price = undefined;
    }

    function can_buy(money, coin_price) {
        if (money < coin_price) {
            console.log("Price exceeds funds")
            return false; 
        }
        return true; 
    }

    if (/* !coin_has_price(bitcoin_price) || 
        !coin_has_price(ethereum_price) || 
        !coin_has_price(litecoin_price) || */ 
        !can_buy(money, bitcoin_price) || 
        !can_buy(money, ethereum_price) || 
        !can_buy(money, litecoin_price)) 
        {
        return undefined;
    }

    const bitcoin_max = Math.floor(money / bitcoin_price);
    const ethereum_max = Math.floor(money / ethereum_price);
    const litecoin_max = Math.floor(money / litecoin_price);

    console.log("With ", money, "$ you can buy: ", bitcoin_max, " Bitcoins, ", ethereum_max, " Ethereum, and ", litecoin_max, " Litecoins");

    return [bitcoin_max, ethereum_max, litecoin_max];
}
// tests
// console.log(crypto_calculator(100, 50, 20, 10));
// console.log(crypto_calculator(-100, 50, 20, 10));
// console.log(crypto_calculator(100, 50.25, 20.001, 10));
console.log(crypto_calculator(100, -50, 20, 10));
// console.log(crypto_calculator(100, -50, 200, 10));