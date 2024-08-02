function sum_n(n) {
    let sum = 0; 

    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log("The sum is", sum_n(100));