function addition_odd() {
    let sum = 0;

    for (let i = 1; i < 102; i+=2) {
        sum += i;
    }

    return sum; 
}

console.log("The sum is", addition_odd());