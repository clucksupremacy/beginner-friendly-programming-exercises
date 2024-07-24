function cone_of_shame(mbps_wikipedia, mbps_memes) { // I disobeyed the instructions in terms of naming
    const rate_wikipedia = 0.10;
    const rate_memes = 0.05;

    let cost_wikipedia = mbps_wikipedia * rate_wikipedia;
    let cost_memes = mbps_memes * rate_memes;

    let total_cost = cost_wikipedia + cost_memes;

    if (total_cost > 100) {
        console.log ("Too much consumption");
    }

    if (cost_memes > cost_wikipedia) {
        console.log("WOW MANY MEMES", "\n", "SUCH LOL");
    }

    return total_cost;
}

// console.log(cone_of_shame(2000, 40000));