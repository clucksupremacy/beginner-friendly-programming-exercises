function total_amazon(cost, location) {
    let shipping;

    if (location === "US") {
        shipping = 5;
    } else if (location === "Europe") {
        shipping = 7;
    } else if (location === "Canada") {
        shipping = 3; 
    } else {
        shipping = 9;
    }

    let total_cost = cost + shipping;

    console.log(
        "You have to pay ", total_cost, "$, ", cost, "$ for the product and ", shipping, "$ for shipping cost"
    );

    return total_cost;
}

// console.log(total_amazon(20, "Canada"));
// console.log(total_amazon(20, "Uzbekistan"));