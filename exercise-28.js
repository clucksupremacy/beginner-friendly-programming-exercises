// instructions unclear. Doing it my way.
const prompt = require("prompt-sync")({ sigint: true });

function countdown() {
    let input = 0;
    let zero_or_greater = 0;

    do {
        input = prompt('Enter a non-negative integer to run. Enter a negative integer to exit: ');
        
        if (input < 0) {
            console.log('Exit Program');
            console.log(zero_or_greater);
            return zero_or_greater;
        } else if (input > -1) {
            zero_or_greater = input;
        }
    }
    while (input);
}
countdown();