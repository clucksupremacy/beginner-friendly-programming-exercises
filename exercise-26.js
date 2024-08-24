function compare_rent() {
    let average_rent = 0;
    let apts_registered = [];
    let apt_of_interest = 0;

    function collect_apt_prices() {
        const prompt = require("prompt-sync")({ sigint: true });
        input = prompt('Enter apartment price. Press 0 or enter a negative value to exit: ');

        if (input <= 0) {
            console.log("Exiting");
            return apts_registered;
        } else if (isNaN(input)) {
            collect_apt_prices();
        } else {
            apts_registered.push(input);
            collect_apt_prices();
        }
    }
    collect_apt_prices();
    console.log(apts_registered);
}

compare_rent();