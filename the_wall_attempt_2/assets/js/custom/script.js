console.log("I'm SIGNUP!");
document.addEventListener("DOMContentLoaded", function(){
    let signup_form = document.querySelector("#signup_form");
    signup_form.addEventListener("submit", signupValidation);

    initializeNextPage();
});

function signupValidation(e){
    e.preventDefault();
    let inputs = document.querySelectorAll(".signup_input");
    for(let element = 0; element < inputs.length; element++){
        if (inputs[element].value.length == 0){
            inputs[element].classList.add("error");
        } else{
            inputs[element].classList.remove("error");    
            inputs[element].classList.remove("signup_input");
        }
    }
};

function initializeNextPage(){
    let signup_inputs = document.querySelectorAll(".signup_input");
    if (signup_inputs.length == 0){
        window.location = "signin.html";
    }

    setTimeout(function(){
        initializeNextPage();
    }, 33);
};