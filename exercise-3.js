function bitcoin_calculator(current_value, percentage_change) { 
    // the input label would require that percentage_change be in the form of "___%"

    if (isNaN(current_value) || isNaN(percentage_change)) { 
        console.log("Number required");
        return undefined;
        // went with isNaN in case we need to read strings
        // not accounting for hexadecimal or other number forms at this stage
    } else {
        current_value = Number(current_value);
        percentage_change = Number(percentage_change);
    }

    let decimal_change = percentage_change * 0.01;
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