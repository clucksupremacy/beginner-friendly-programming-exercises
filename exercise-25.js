function coinflip_percentage() {
    const readline = require('node:readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let tails_count = 0;
    let head_count = 0;

    (function loop() {
        rl.question("Enter 'head' or 'tails', or 'stop' to stop:", (answer) => {
            const stop = answer === "stop";
        
            if (stop) {
                rl.close();
                console.log("tails:", tails_count, "head:", head_count);
                return {tails_count, head_count};
            } else if (answer === "tails") {
                tails_count++;
                console.log('tails_count', tails_count);
                loop();
            } else if (answer === "head") {
                head_count++; 
                console.log('head_count', head_count);
                loop();
            } else {
                loop();
            }
        });
    })();
    console.log("HEY", tails_count, head_count); //attempting to access the updated values of the variables outside of loop() scope. Need those to do calculations.
}

coinflip_percentage();

// Am proud of my test function names, wrigglybees() and hard_worms_pay_off(). Aren't they cute?