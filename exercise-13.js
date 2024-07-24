function internet_cafe(hours, is_member) {
    const rate_member = 2;
    const rate_nonmember = 5;

    const percent_tax_member = 10; 
    const percent_tax_nonmember = 20;
    
    const tax_member = 0.10;
    const tax_nonmember = 0.20;

    if (is_member) {
        let total_pre_tax = hours * rate_member;
        let total_post_tax = total_pre_tax + (total_pre_tax * tax_member);

        console.log(
            "The user is a member stayed ", hours, "hours for ", rate_member, "$/hour plus the ", percent_tax_member, "% the total amount is ", total_post_tax, "$"
        );

        return total_post_tax;
    } else {
        let total_pre_tax = hours * rate_nonmember;
        let total_post_tax = total_pre_tax + (total_pre_tax * tax_nonmember);

        console.log(
            "The user is a non-member stayed ", hours, "hours for ", rate_nonmember, "$/hour plus the ", percent_tax_nonmember, "% the total amount is ", total_post_tax, "$"
        );

        return total_post_tax;
    }
}

console.log(internet_cafe(2, false));