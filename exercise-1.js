function swap(a, b) {
    c = a;

    a = b;
    b = c;
    
    return [a, b];
}

// to access a and b
let [a, b] = swap(11, 22);
console.log(a);
console.log(b);