console.log("I'M DASHBOARD!");
document.addEventListener("DOMContentLoaded", function(){
    // initializeDashboard();
    let post_btns = document.querySelectorAll(".post_btn");
    post_btns.forEach(function(active_post_btn){
        active_post_btn.addEventListener("click", postThis);
    })
});

function initializeDashboard (){
    console.log("---");
    setTimeout(function(){
        initializeDashboard();
    }, 33);
};

function postThis (event){
    console.log(event.target);
    let form_container = event.target.closest(".form_style");
    let textarea = form_container.querySelector(".textarea_element");
    console.log(textarea.value);
    // clone();
};

// function clone (){
//     let list = document.querySelector(".forum_style");
//     let cloned_list = list.cloneNode(true);
//     let posted_forum = document.querySelector("#posted_forum_list");

//     posted_forum.appendChild(cloned_list);
// }