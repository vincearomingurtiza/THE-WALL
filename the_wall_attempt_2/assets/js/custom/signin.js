console.log("I'm SIGNIN!");
document.addEventListener("DOMContentLoaded", function(){
    let signin_form = document.querySelector("#signin_form");
    signin_form.addEventListener("submit", signinValidation);

    initializeNextPage();
});

function signinValidation(e){
    e.preventDefault();
    let inputs = document.querySelectorAll(".signin_input");
    for(let element = 0; element < inputs.length; element++){
        if (inputs[element].value.length == 0){
            inputs[element].classList.add("error");
        } else{
            inputs[element].classList.remove("error");
            inputs[element].classList.remove("signin_input");
        }
    }
};

function initializeNextPage(){
    let signin_inputs = document.querySelectorAll(".signin_input");
    if (signin_inputs.length == 0){
        window.location = "dashboard.html";
    }
    
    setTimeout(function(){
        initializeNextPage();
    }, 33);
};