function sign_5(a, b, c, d, e) {    //hard-coded version
    function sign(num) {
        if (Math.sign(num) == -1) {
            return "Negative";
        } else if (Math.sign(num) == 0) {
            return "0";
        } else if (Math.sign(num) == 1) {
            return "Positive";
        }
    }
    
    let message = [sign(a), sign(b), sign(c), sign(d), sign(e)];

    return message;
}

// console.log(sign_5(4, 6, -11, -4, 9));