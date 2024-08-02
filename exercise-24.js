function sum_above_0(arr) {
    let sum = 0;

    for (let i = 0; arr[i] > 0; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log("The sum is", sum_above_0([5, 9, 3, 7, 0]));