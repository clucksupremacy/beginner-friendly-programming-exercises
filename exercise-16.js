function meal_cost(meal) {
    let cost; 

    switch(meal) {
        case "Burger":
            cost = 5; 
            break;
        case "Pizza": 
            cost = 3;
            break;
        case "Hot Dog": 
            cost = 1.50;
            break;
    }

    console.log(meal, cost, "$");

    return cost;
}

// console.log(meal_cost("Pizza"));