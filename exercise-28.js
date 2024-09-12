const prompt = require("prompt-sync")({ sigint: true });

function countdown() {
    let input = prompt('Enter a non-negative integer value (e.g. 0, 1, 2): ');

    if (input < 0 || input % 1 != 0 || isNaN(input) === true) {
        console.log("Exit Program");
        return input;
    } else {
        console.log("Counting down");
        let intervalId = setInterval(() => {
            if (input < 0 || input % 1 != 0 || isNaN(input) === true) {
                console.log("Exit Program");
                clearInterval(intervalId);
            } else if (input == 0) {
                console.log("Go!");
                clearInterval(intervalId);
            } else {
                console.log(input--);
            }
        }, 1000);
    }
}
countdown();