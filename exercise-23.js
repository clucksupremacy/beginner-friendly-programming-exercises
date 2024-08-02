function sum_positive(arr) {
    let sum = 0;
    
    for (let i = 0; arr[i] > -1; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log("The sum is", sum_positive([5, 9, 3, 0, 2, 0, 4, -7]));