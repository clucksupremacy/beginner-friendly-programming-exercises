function crypto_calculator(money, bitcoin_price, ethereum_price, litecoin_price) {
    if (money <= 0 || bitcoin_price <= 0 || ethereum_price <= 0 || litecoin_price <= 0 || money < bitcoin_price || money < ethereum_price || money < litecoin_price) {
        return undefined;
    }

    const bitcoin_max = Math.floor(money / bitcoin_price);
    const ethereum_max = Math.floor(money / ethereum_price);
    const litecoin_max = Math.floor(money / litecoin_price);

    return [bitcoin_max, ethereum_max, litecoin_max];
}
// tests
// console.log(crypto_calculator(100, 50, 20, 10));
// console.log(crypto_calculator(-100, 50, 20, 10));
// console.log(crypto_calculator(100, 50.25, 20.001, 10));
// console.log(crypto_calculator(100, -50, 20, 10));