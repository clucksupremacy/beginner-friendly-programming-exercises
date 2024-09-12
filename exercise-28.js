// instructions unclear. Doing it my way.
const prompt = require("prompt-sync")({ sigint: true });

function start() {
    let input = 0;
    let zero_or_greater = 0;

    do {
        input = prompt('Enter a non-negative integer to run. Enter a negative integer to exit: ');
        
        if (input < 0) {
            console.log('Countdown begins');
            return zero_or_greater;
        } else if (input > -1) {
            zero_or_greater = input;
        }
    }
    while (input);
}

function countdown() {
    let num_start = start();

    let intervalId = setInterval(() => {
        if (num_start > 0) {
            console.log(num_start--);
        } else if (num_start == 0) {
            console.log("Go!");
            clearInterval(intervalId);
        }
      }, 1000);
}
countdown();