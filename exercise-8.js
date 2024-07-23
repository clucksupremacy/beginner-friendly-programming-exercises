function monthly_salary(years, children, perfect_attendance) {
    let comp_years = 20 * years; 
    let comp_children = 30 * children; 
    let min_wage = 400;
    let total_comp = min_wage + comp_years + comp_children;

    if (perfect_attendance) {
        let bonus = 100;
        total_comp += 100; 

        console.log("The total amount is ", total_comp, "$. ", min_wage, "$ minimum wage + ", comp_years, "$ for ", years, "years experience + ", comp_children, "$ for ", children, "kids + ", bonus, "$ for not missing a day at work");

        return total_comp;
    } else {
        console.log("The total amount is ", total_comp, "$. ", min_wage, "$ minimum wage + ", comp_years, "$ for ", years, "years experience + ", comp_children, "$ for ", children, "kids");

        return total_comp;
    }
}

// console.log(monthly_salary(5, 2, true));