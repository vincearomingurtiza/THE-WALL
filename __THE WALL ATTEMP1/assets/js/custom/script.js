document.addEventListener("DOMContentLoaded", function(){
    let signup_button = document.querySelector("#signup_btn");
    signup_button.addEventListener("click", validation);
});

function validation(){
    let inputs = document.querySelectorAll(".input_style");
    for(let counter = 0; counter < inputs.length; counter++){
        if(inputs[counter].value == ""){
            inputs[counter].setAttribute("class", "error");
        } else{
            inputs[counter].classList.remove("error");
        }
    }
}