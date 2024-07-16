function bitcoin_calculator(current_value, percent_change) {
    let decimal_change = percent_change * 0.01;
    let percent_value = Math.abs(current_value) * decimal_change;
    let total_value = current_value + percent_value; 

    console.log("Total bitcoin value: ", total_value);
    console.log("Value increase/decrease: ", percent_value);

    return [total_value, percent_value];
}

// tests
// bitcoin_calculator(10000, 10);  // Expected: 11000, 1000
// bitcoin_calculator(-10000, 10); // Expected: -9000, 1000
// bitcoin_calculator(10000, -10); // Expected: 9000, -1000
// bitcoin_calculator(-10000, -10);// Expected: -11000, -1000