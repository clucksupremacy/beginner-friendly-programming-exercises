function coinflip_percentage() {
    let tails_count = 0; 
    let head_count = 0;

    function coinflip_loop() {
        const prompt = require("prompt-sync")({ sigint: true });
        input = prompt('Enter "head" or "tails", or "stop" to stop: ');
        const stop = input === "stop";
        if (stop) {
            console.log("head:", head_count, "tails:", tails_count);
            return {tails_count, head_count};
        } else if (input === "tails") {
            tails_count++;
            console.log('head_count', head_count,'tails_count', tails_count);
            coinflip_loop();
        } else if (input === "head") {
            head_count++; 
            console.log('head_count', head_count,'tails_count', tails_count);
            coinflip_loop();
        } else {
            coinflip_loop();
        }
    }
    coinflip_loop();
}
coinflip_percentage();

// Am proud of my test function names, wrigglybees() and hard_worms_pay_off(). Aren't they cute?