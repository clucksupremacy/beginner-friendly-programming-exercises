function phone_bill(seconds) {
    let amount;

    if (seconds < 1) {
        amount = 0;
    } else if ((seconds >= 1) && (seconds <= 500)) {
        amount = seconds * 0.01;
    } else if ((seconds >= 501) && (seconds <= 800)) {
        amount = 5 + ((seconds - 500) * 0.008); // amount = (500 * 0.01) + ((seconds - 500) * 0.008); 
    } else if (seconds >= 801) {
        amount = 7.4 + ((seconds - 800) * 0.005); // amount = (500 * 0.01) + (300 * 0.008) + ((seconds - 800) * 0.005);
    }

    let total_amount = amount + 25;

    console.log("total amount: ", total_amount, "$");

    return total_amount;
}

// phone_bill(801);