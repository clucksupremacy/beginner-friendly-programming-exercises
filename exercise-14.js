// PULL FROM ORIGIN AFTER EXERCISE13 IS APPROVED. DO NOT PUSH UNTIL THIS IS DONE.
// DO THE SAME FOR MAIN
function total_amazon(cost, location) {
    const shipping_us = 5;
    const shipping_europe = 7;
    const shipping_canada = 3;
    const shipping_other = 9;

    if (location === "US") {
        let total_cost = cost + shipping_us;

        console.log(
            "You have to pay ", total_cost, "$, ", cost, "$ for the product and ", shipping_us, "$ for shipping cost"
        );

        return total_cost;
    } else if (location === "Europe") {
        let total_cost = cost + shipping_europe;

        console.log(
            "You have to pay ", total_cost, "$, ", cost, "$ for the product and ", shipping_europe, "$ for shipping cost"
        );

        return total_cost;
    } else if (location === "Canada") {
        let total_cost = cost + shipping_canada;

        console.log(
            "You have to pay ", total_cost, "$, ", cost, "$ for the product and ", shipping_canada, "$ for shipping cost"
        );

        return total_cost;
    } else {
        let total_cost = cost + shipping_other;

        console.log(
            "You have to pay ", total_cost, "$, ", cost, "$ for the product and ", shipping_other, "$ for shipping cost"
        );

        return total_cost;
    }
}

// console.log(total_amazon(20, "Canada"));
// console.log(total_amazon(20, "Uzbekistan"));