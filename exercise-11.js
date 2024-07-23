function things_can_buy(hours, rate) {
    if ((hours < 0) || (rate < 0)) {
        return undefined;
    }

    const ps4 = 200;
    const samsung = 900;
    const tv = 500;
    const game_skin = 9.99;

    let total_income = hours * rate;

    let number_ps4 = Math.floor(total_income / ps4);
    let number_samsung = Math.floor(total_income / samsung);
    let number_tv = Math.floor(total_income / tv); 
    let number_game_skin = Math.floor(total_income / game_skin); 

    console.log(
        "I can buy ", number_ps4, "PS4, ", number_samsung, "Samsung, ", number_tv, "TV, ", number_game_skin, "game skin"
    );

    return [number_ps4, number_samsung, number_tv, number_game_skin];
}

// console.log(things_can_buy(200, 18));