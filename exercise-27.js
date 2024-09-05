const prompt = require("prompt-sync")({ sigint: true });

function setup_credentials() {
    let set_username = "";
    let set_password = "";

    set_username = prompt('Enter a new username: ');
    set_password = prompt('Enter a new password: ');

    return [set_username, set_password]; 
}

function login() {
    let credentials = setup_credentials();
    let username = credentials[0];
    let password = credentials[1];

    let login_user = "";
    let login_pass = "";
    let attempt_counter = 0;


    do {
        login_user = prompt('Enter username: ');

        if (login_user !== username) {
            console.log("Username not found. Try again.");
        }
    }
    while (login_user !== username);

    do {
        login_pass = prompt('Enter password: ');

        if (login_pass !== password) {
            console.log("Incorrect password. Try again.");
            attempt_counter++;
            
            if (attempt_counter == 3) {
                console.log("3 incorrect attempts made. Try again later."); 
                return [login_user, login_pass];
            }
        } else if (login_pass === password) {
            console.log("Login successful.");
            return [login_user, login_pass];
        }
    }
    while (login_pass !== password);
} 
login();