function average_sum_n(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    let average = sum / n;

    return average;
}

console.log("The average is", average_sum_n(100));