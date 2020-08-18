document.querySelector(".form-signin").addEventListener("submit", function(e) {
    let inputPassword = document.querySelector("#inputPassword");
    let minPasswordLength = 4;

    if (inputPassword.value.length < minPasswordLength) {
        alert(`Password length is less than ${minPasswordLength} character!`);
        // Prevent form submission
        e.preventDefault();
        return false;
    }
});

document.querySelector(".icon-eye").addEventListener("click", function() {
    let inputPasswordType = document.querySelector("#inputPassword").type;

    if (inputPasswordType == "password") {
        document.querySelector("#inputPassword").type = "text";
        document.querySelector(".icon-eye").innerHTML = "<i class='fas fa-eye-slash'></i>";
    } else {
        document.querySelector("#inputPassword").type = "password";
        document.querySelector(".icon-eye").innerHTML = "<i class='fas fa-eye'></i>";
    }
});