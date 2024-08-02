function sign_arr(arr) {
    let arr_message = [];

    for (let i = 0; i < arr.length; i++) {
        function sign(arr) {
            if (Math.sign(arr[i]) == -1) {
                return "Negative";
            } else if (Math.sign(arr[i]) == 0) {
                return "0";
            } else if (Math.sign(arr[i]) == 1) {
                return "Positive";
            }
        }
        arr_message.push(sign(arr));
    }

    return arr_message;
}

console.log(sign_arr([4, 6, -11, -4, 9]));