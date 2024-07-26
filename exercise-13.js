function internet_cafe(hours, is_member) {
    let member_status;
    let rate;
    let tax;

    if (is_member) {
        member_status = "member";
        rate = 2;
        tax = 0.10;
    } else {
        member_status = "nonmember";
        rate = 5;
        tax = 0.20;
    }

    let total_pre_tax = hours * rate;
    let total_post_tax = total_pre_tax + (total_pre_tax * tax);

    console.log(
        "The user is a", member_status, "stayed ", hours, "hours for ", rate, "$/hour plus the ", tax * 100, "% the total amount is ", total_post_tax, "$"
    );
    
    return total_post_tax;
}

// console.log(internet_cafe(2, false));