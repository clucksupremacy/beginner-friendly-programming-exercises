function monthly_salary(years, children) {
    let comp_years = 20 * years; 
    let comp_children = 30 * children; 
    let min_wage = 400;
    let total_comp = min_wage + comp_years + comp_children; 
    
    console.log("The total amount is ", total_comp, "$. ", min_wage, "$ minimum wage + ", comp_years, "$ for ", years, "years experience + ", comp_children, "$ for ", children, "kids");

    return total_comp; 
}

console.log(monthly_salary(5, 2));