console.log("I'm SIGNUP!");
document.addEventListener("DOMContentLoaded", function(){
    let signup_form = document.querySelector("#signup_form");
    signup_form.addEventListener("submit", signupValidation);
});

function signupValidation(e){
    e.preventDefault();
    let inputs = document.querySelectorAll(".signup_input");
    inputs.forEach(function(){
        for(let element = 0; element < inputs.length; element++){
            if (inputs[element].value.length == 0){
                inputs[element].classList.add("error");
            } else{
                inputs[element].classList.remove("error");
            }
        }
    });
};