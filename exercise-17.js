function addition() {
    let sum = 0;

    for (let i = 1; i < 100; i++) {
        sum += i;
    }

    return sum;
}

console.log("The sum is", addition());