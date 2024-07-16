function bitcoin_calculator(current_value, percent_change) {
    let decimal_change = percent_change * 0.01;
    let percent_value = current_value * decimal_change;
    let total_value = current_value + percent_value; 

    console.log("Total bitcoin value: ", total_value);
    console.log("Amount increased or decreased: ", percent_value);
}

bitcoin_calculator(10000, 10);