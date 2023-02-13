let inputs = document.querySelectorAll(".input_field");
document.addEventListener("DOMContentLoaded", function(){
    let signup_form = document.querySelector("#signup_form");
    signup_form.addEventListener("submit", validation);
});

function validation(event){
    event.preventDefault();
    let inputs = document.querySelectorAll(".input_field");
    for (let element = 0; element < inputs.length; element++){
        if (inputs[element].value.length > 0){
            inputs[element].classList.remove("error");
        } else {
            inputs[element].classList.add("error");
        }
    }
    let errors = document.querySelectorAll(".error");
    if (errors.length == 0){
        window.location = "login.html";
    }
};