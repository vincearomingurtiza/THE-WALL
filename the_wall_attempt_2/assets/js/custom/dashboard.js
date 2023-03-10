document.addEventListener("DOMContentLoaded", function(){
    let post_btn = document.querySelector("#post_btn");
    post_btn.addEventListener("click", postForum);
});

// addComment("body", "hello");
// addComment("div.comment", "hi");

// function addComment (container, data){
//     container.append(data)
// }

function postForum(post_textarea, comment_textarea){
    let forum = document.querySelector("#clone_container .forum_items");
    let cloned_forum = forum.cloneNode(true);
    let post_textarea = document.querySelector("#post_textarea");
    let forum_content = cloned_forum.querySelector(".forum_content");
    let posted_forum = document.querySelector("#posted_forum");

    forum_content.innerHTML = ""+ post_textarea.value +"";
    /* Check inputted value | Clone Forum */
    if (post_textarea.value.length != 0){
        post_textarea.value = "";
        cloned_forum.classList.remove("clone_forum");
        post_textarea.classList.remove("error");
        posted_forum.appendChild(cloned_forum);
    } else{
        post_textarea.classList.add("error");
    }

    /* Hide #empty_post if there's a posted forum */
    let forums = document.querySelectorAll(".forum_items");
    if(forums.length > 1){
        let empty_post = document.querySelector("#empty_post");
        empty_post.style.display = "none";
    }

    /* Hide forum clone */
    let edit_forum = document.querySelector(".edit_forum");
    edit_forum.classList.add("hide");

    /* Edit Forum Listener*/
    let forum_edit_btns = document.querySelectorAll("#forum_edit_btn");
    forum_edit_btns.forEach(function(active_edit_btn){
        active_edit_btn.addEventListener("click", editForum);
    });

    /* Delete Forum Listener*/
    let yes_forum_btns = document.querySelectorAll(".yes_forum_btn");
    yes_forum_btns.forEach(function(active_yes_btn){
        active_yes_btn.addEventListener("click", deleteForum);
    });

    /* Delete Add Animation */
    let forum_delete_btns = document.querySelectorAll(".delete_icon");
    forum_delete_btns.forEach(function(active_delete_btn){
        active_delete_btn.addEventListener("click", function(){
            let forum_delete_btn = this.closest("#forum_delete_btn");
            forum_delete_btn.classList.add("active");
            forum_delete_btn.querySelector(".confirm_container").classList.add("active");
        });
    });

    /* Delete Remove Animation */
    let no_forum_btns = document.querySelectorAll(".no_forum_btn");
    no_forum_btns.forEach(function(active_no_btn){
        active_no_btn.addEventListener("click", function(){
            let confirm_container = this.closest(".confirm_container");
            confirm_container.classList.remove("active");
            confirm_container.closest("#forum_delete_btn").classList.remove("active");
        });
    });

    /* Post Comment */
    let comment_btns = document.querySelectorAll("#comment_btn");
    comment_btns.forEach(function(active_comment_btn){
        active_comment_btn.addEventListener("click", postComment);
    })
};

function editForum(){
    let forum_items = this.closest(".forum_items");
    let edit_forum = forum_items.querySelector(".edit_forum");
    edit_forum.classList.remove("hide");

    let edit_forum_textarea = forum_items.querySelector("#edit_forum_textarea");
    let forum_content = forum_items.querySelector(".forum_content");
    edit_forum_textarea.value = ""+ forum_content.innerHTML +"";

    /* While editing comment hide this */
    forum_content.classList.add("hide");

     /* Save Forum Listener */
     let forum_save_btns = document.querySelectorAll("#save_btn");
     forum_save_btns.forEach(function(active_save_btn){
         active_save_btn.addEventListener("click", saveForum);
     }); 
};

function saveForum(){
    let forum_items = this.closest(".forum_items");
    let edit_forum_textarea = forum_items.querySelector("#edit_forum_textarea");
    let forum_content = forum_items.querySelector(".forum_content");

    let edit_forum = forum_items.querySelector(".edit_forum");
    /* Inputed Text Checker */
    if (edit_forum_textarea.value.length != 0){
        forum_content.innerHTML = ""+ edit_forum_textarea.value +"";
        edit_forum.classList.add("hide")
        forum_content.classList.remove("hide");
        edit_forum_textarea.classList.remove("error");
    } else{
        edit_forum_textarea.classList.add("error");
    }
};

function deleteForum(){
    let forum_item = this.closest(".forum_items");
    forum_item.remove();
    
    /* Unhide #empty_post if there's a posted forum */
    let forums = document.querySelectorAll(".forum_items");
    if (forums.length == 1){
        let empty_post = document.querySelector("#empty_post");
        empty_post.style.display = "block";
    }
};

function postComment(){
    let comment_container = this.closest(".comment_container");
    let post_comment_clone = comment_container.querySelector(".post_comment_clone");
    let cloned_comment = post_comment_clone.cloneNode(true);
    let comment_textarea = comment_container.querySelector("#comment_textarea");
    let posted_comment = comment_container.querySelector(".posted_comment");

    if (comment_textarea.value.length != 0){
        // cloned_comment.setAttribute("class", "post_comment");
        cloned_comment.classList.add("post_comment");
        cloned_comment.classList.remove("hide");
        cloned_comment.querySelector(".comment_content").textContent = comment_textarea.value;
        comment_textarea.classList.remove("error");

        comment_textarea.value = "";
        posted_comment.appendChild(cloned_comment);
        
        /* Hide Edit Comment Textarea */
        let edit_comment = cloned_comment.querySelector(".edit_comment");
        edit_comment.classList.add("hide");

        /* Response Count */
        let response = this.closest(".forum_items").querySelector(".number_of_response");
        response.textContent = posted_comment.childElementCount + " Responses";

        /* Edit Comment Listener */
        let comment_edit_btns = cloned_comment.querySelectorAll("#comment_edit_btn");
        comment_edit_btns.forEach(function(active_edit_btn){
            active_edit_btn.addEventListener("click", editComment);
        });

        /* Delete Comment Listener */
        let yes_comment_btns = cloned_comment.querySelectorAll(".yes_comment_btn");
        yes_comment_btns.forEach(function(active_yes_btn){
            active_yes_btn.addEventListener("click", deleteComment);
        });

        /* Delete Add Animation */
        let comment_delete_btns = document.querySelectorAll(".delete_icon");
        comment_delete_btns.forEach(function(active_delete_btn){
            active_delete_btn.addEventListener("click", function(){
                let comment_delete_btn = this.closest("#comment_delete_btn");
                comment_delete_btn.classList.add("active");
                comment_delete_btn.querySelector(".confirm_container").classList.add("active");
            });
        });

        /* Delete Remove Animation */
        let no_comment_btns = document.querySelectorAll(".no_comment_btn");
        no_comment_btns.forEach(function(active_no_btn){
            active_no_btn.addEventListener("click", function(){
                let confirm_container = this.closest(".confirm_container");
                confirm_container.classList.remove("active");
                confirm_container.closest("#comment_delete_btn").classList.remove("active");
            });
        });

    } else{
        comment_textarea.classList.add("error");
    }
    
};

function editComment(){
    let post_comment = this.closest(".post_comment");
    let comment_content = post_comment.querySelector(".comment_content");
    let edit_comment_textarea = post_comment.querySelector("#edit_comment_textarea");
    
    edit_comment_textarea.value = ""+ comment_content.innerHTML +"";
    if (edit_comment_textarea.value.length != 0){
        edit_comment_textarea.classList.remove("error");
    }

    /* Unhide Edit Comment Textarea */
    let edit_comment = post_comment.querySelector(".edit_comment");
    edit_comment.classList.remove("hide");

    /* Hide Comment Content */
    comment_content.classList.add("hide");
    
    let save_comment_btns = post_comment.querySelectorAll("#save_comment_btn");
    save_comment_btns.forEach(function(active_save_btn){
        active_save_btn.addEventListener("click", saveComment);
    });
};

function saveComment(){
    let edit_comment = this.closest(".edit_comment");
    let post_comment = this.closest(".post_comment");
    let edit_comment_textarea = edit_comment.querySelector("#edit_comment_textarea");
    let comment_content = post_comment.querySelector(".comment_content");
    
    if (edit_comment_textarea.value.length != 0){
        comment_content.innerHTML = ""+ edit_comment_textarea.value +"";
        edit_comment_textarea.classList.remove("error");

        edit_comment.classList.add("hide");
        comment_content.classList.remove("hide");
    } else{
        edit_comment_textarea.classList.add("error");
    }
};

function deleteComment(){
    let post_comment = this.closest(".post_comment");
    console.log("delete comment");
    
    /* Response Count */
    let comment_container = this.closest(".comment_container");
    let posted_comment = comment_container.querySelector(".posted_comment");
    let response = this.closest(".forum_style").querySelector(".number_of_response");
    let response_count = posted_comment.childElementCount - 1;
    
    response.textContent = response_count + " Responses";
    post_comment.remove();
};