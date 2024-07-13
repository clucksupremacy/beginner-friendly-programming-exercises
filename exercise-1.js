function swap(a, b) {
    first_value = a; 
    second_value = b; 

    a = second_value; 
    b = first_value; 
    
    return [a, b];
}

// to access a and b
let [a, b] = swap(11, 22);
console.log(a);
console.log(b);