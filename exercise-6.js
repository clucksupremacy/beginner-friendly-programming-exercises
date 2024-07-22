function total_price(price, tax_percentage) {
    if (price < 0) {
        console.log("Price invalid");
        return undefined;
    }

    let tax_decimal = tax_percentage * 0.01; 
    let percent_value = price * tax_decimal;
    let full_price = price + percent_value;

    console.log("The total price of the laptop is ", full_price, "$");
    
    return full_price;
}

// console.log(total_price(300, 10));
// console.log(total_price(-300, 10));