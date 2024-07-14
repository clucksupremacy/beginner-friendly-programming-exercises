function average(geometry, algebra, physics) {
    let g = geometry; 
    let a = algebra;
    let p = physics; 

    if ((g < 0 || g > 10) || (a < 0 || a > 10) || (p < 0 || p > 10)) {
        return undefined;
    }

    let average_score = (g + a + p) / 3;

    if (average_score >= 7) {
        console.log("Good job!");
    } else if ((average_score <= 6) && (average_score >= 4)) {
        console.log("You need to work harder!");
    } else {
        console.log("Failed, you really need to work harder!");
    }
    
    return average_score;
}

// test 
console.log(average(1.5,-5,10)); // undefined
console.log(average(1.5,5,10)); // 5.5 and "You need to work harder!"