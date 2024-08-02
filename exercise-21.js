function average_5(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;
    
    return average;
}

console.log("The average is", average_5([4, 6, 1, 4, 9]));