let average_rent = 0;
let apts_registered = [];
let number_input = 0;
let sum = 0;

function collect_apt_prices() {
    do {
        const prompt = require("prompt-sync")({ sigint: true });
        input = prompt('Enter apartment price to add to register. Press 0 or enter a negative value to exit: ');

        if (input <= 0) {
            console.log("Exiting");
            return apts_registered;
        } else if (!isNaN(input)) {
            number_input = Number(input);
            apts_registered.push(number_input);
        }
    }
    while (input > 0 || isNaN(input));
}

function calculate_avg_price() {
    for (let i = 0; i < apts_registered.length; i++) {
        sum += apts_registered[i];
    }

    average_rent = sum / (apts_registered.length);
    // average_rent = apts_registered.reduce((a, b) => a + b, 0); 
        // the start of an alternative method

    console.log(apts_registered.length, "apartments have registed. The average price for rent is ",     average_rent, "$"); // keeping the funky spelling errors

    return average_rent;
} 

function compare_prices() {
    do {
        const prompt = require("prompt-sync")({ sigint: true });
        input = prompt('Enter apartment price to compare with average rent price. Press 0 or enter a negative value to exit: ');

        if (input <= 0) {
            console.log("Quit Program");
        } else if (input == average_rent) {
            console.log("Equal to average price"); // added an equals condition for consistency
        } else if (input < average_rent) {
            console.log("Below average price");
        } else if (input > average_rent) {
            console.log("Above average price");
        }
    }
    while (input > 0 || isNaN(input));
}

function rent_prices() {
    collect_apt_prices();
    calculate_avg_price();
    compare_prices();
} rent_prices();