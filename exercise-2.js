function average(geometry, algebra, physics) {
    let g = geometry; 
    let a = algebra;
    let p = physics; 

    if ((g < 0 || g > 10) || (a < 0 || a > 10) || (p < 0 || p > 10)) {
        return undefined;
    }

    let average_score = (g + a + p) / 3;
    
    return average_score;
}

// test 
console.log(average(1.5,-5,10)); // output: undefined
console.log(average(1.5,5,10)); // output: average_score