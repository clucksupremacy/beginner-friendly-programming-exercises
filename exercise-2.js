function average(geometry, algebra, physics) {
    let g = geometry; 
    let a = algebra;
    let p = physics;

    function is_grade(num) {
        if (num < 0 || num > 10) {
            return false;
        }
        return true;
    }

    if (!is_grade(g) || !is_grade(a) || !is_grade(p)) {
        return undefined;
    }

    let average_score = (g + a + p) / 3;
    
    return average_score;
}

// test 
console.log(average(1.5,-5,10)); // output: undefined
console.log(average(1.5,5,10)); // output: average_score