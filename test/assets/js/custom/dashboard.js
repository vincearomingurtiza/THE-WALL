console.log("I'M DASHBOARD!");
document.addEventListener("DOMContentLoaded", function(){
    initializeDashboard();
    let post_forum_btn = document.querySelector("#post_forum_btn");
    post_forum_btn.addEventListener("click", postForum);
    initializeDashboard();
});

function initializeDashboard(){
    setTimeout(function(){
        initializeDashboard();
    }, 33);
};

function postForum(){
    let posted_forum_list = document.querySelector(".posted_forum_list");
    let post_forum_textarea = document.querySelector("#post_textarea");

    let forum_item = document.querySelector(".forum_item");
    let cloned_forum = forum_item.cloneNode(true);
    let forum_paragraph = cloned_forum.querySelector(".forum_article");

    forum_paragraph.value = post_forum_textarea.value;
    console.log(post_forum_textarea.value);
    
    posted_forum_list.append(cloned_forum);
};