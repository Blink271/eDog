const isValidPassword = (password) => {
    if(password.length < 8) {
        return false;
    }
    if(password === password.toLowerCase()) {
        return false;
    }
    if(!/[!@#$%^&*()_+{}\[\]:;<>,.?/~`-]/.test(password)) {
        return false;
    }
    if(!/\d/.test(password)) {
        return false;
    }
    return true;
}


