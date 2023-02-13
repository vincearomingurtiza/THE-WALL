document.addEventListener("DOMContentLoaded", function(){
    let post_form = document.querySelector("#post_form");
    post_form.addEventListener("submit", postForum);
});
function postForum(event){
    event.preventDefault();
    let forum_item = document.querySelector(".clone_forum");
    let cloned_forum = forum_item.cloneNode(true);
    let posted_forum = document.querySelector("#posted_forum");
    let empty_post = document.querySelector("#empty_post");
    /*Post forum*/
    let post_textarea = document.querySelector("#post_textarea");
    let forum_article = cloned_forum.querySelector(".forum_article");
    if (post_textarea.value.length > 0){
        cloned_forum.classList.remove("clone_forum");
        post_textarea.classList.remove("error");
        forum_article.innerHTML = post_textarea.value;
        posted_forum.prepend(cloned_forum)
        post_textarea.value = "";
    } else{
        post_textarea.classList.add("error");
    }
    /* Check if there's a posted forum*/
    if (posted_forum.children.length > 0){
        empty_post.classList.add("hide");
    } else {
        empty_post.classList.remove("hide");
    }
    /*Delete Forum Listener*/
    let delete_btns = document.querySelectorAll(".delete_btn");
    delete_btns.forEach(function(active_delete){
        active_delete.addEventListener("click", deleteForum);
    });
    /*Edit Forum Listener*/
    let edit_btns = document.querySelectorAll(".edit_btn");
    edit_btns.forEach(function(active_edit){
        active_edit.addEventListener("click", editForum);
    });
    /*Post Comment Listener*/
    let comment_form = cloned_forum.querySelector("#comment_form");
    comment_form.addEventListener("submit", postComment);
};
function deleteForum(event){
    let buttons = event.target.closest(".buttons");
    buttons.classList.add("active");
    buttons.querySelector(".no_btn").addEventListener("click", function(){
        buttons.classList.remove("active");
    });
    /*Confirm Listener*/
    let confirm_forms = document.querySelectorAll(".confirm_form");
    confirm_forms.forEach(function(active_confirm){
        active_confirm.addEventListener("submit", confirmForum);
    });
};
function confirmForum(event){
    let posted_forum = document.querySelector("#posted_forum");
    event.preventDefault();
    event.target.closest(".forum_item").remove();
    if (posted_forum.children.length > 0){
        empty_post.classList.add("hide");
    } else {
        empty_post.classList.remove("hide");
    }
};
function editForum(event){
    event.preventDefault();
    let forum_item = event.target.closest(".forum_item");
    let forum_article = forum_item.querySelector(".forum_article");
    let edit_form = forum_item.querySelector(".edit_form");
    let edit_forum = edit_form.querySelector("#edit_forum");
    forum_item.querySelector(".buttons").classList.add("hide");
    edit_forum.value = forum_article.innerHTML;
    forum_article.classList.add("hide");
    edit_form.classList.remove("hide");
    /*Save forum listener*/
    edit_form.addEventListener("submit", saveForum);
};
function saveForum(event){
    event.preventDefault();
    let forum_item = event.target.closest(".forum_item");
    let forum_article = forum_item.querySelector(".forum_article");
    let edit_form = forum_item.querySelector(".edit_form");
    let edit_forum = edit_form.querySelector("#edit_forum");
    forum_item.querySelector(".buttons").classList.remove("hide");
    if (edit_forum.value.length > 0){
        forum_article.innerHTML = edit_forum.value;
        forum_article.classList.remove("hide");
        edit_form.classList.add("hide");
        edit_forum.classList.remove("error");
    } else{
        edit_forum.classList.add("error");
    }
};
function postComment(event){
    event.preventDefault();
    let forum_item = event.target.closest(".forum_item");
    let comment_item = forum_item.querySelector(".clone_comment");
    let cloned_comment = comment_item.cloneNode(true);
    let comment_textarea = event.target.querySelector("#comment_textarea");
    let posted_comment= forum_item.querySelector("#posted_comment");
    /*Post comment*/
    if (comment_textarea.value.length > 0){
        comment_textarea.classList.remove("error");
        cloned_comment.classList.remove("clone_comment");
        forum_item.classList.add("add_comment");
        cloned_comment.querySelector(".comment_article").innerHTML = comment_textarea.value;
        posted_comment.appendChild(cloned_comment);
        comment_textarea.value = "";
    } else{
        comment_textarea.classList.add("error");
    }
    /* Responses Count*/
    let responses = forum_item.querySelector(".responses");
    responses.innerHTML = posted_comment.children.length + " Responses";
    /*Edit Comment Listener*/
    let edit_btns = cloned_comment.querySelectorAll(".edit_btn");
    edit_btns.forEach(function(active_edit){
        active_edit.addEventListener("click", editComment);
    });
    /*Delete Comment Listener*/
    let delete_btns = cloned_comment.querySelectorAll(".delete_btn");
    delete_btns.forEach(function(active_delete){
        active_delete.addEventListener("click", deleteComment);
    });
};
function editComment(event){
    event.preventDefault();
    let comment_item = event.target.closest(".comment_item");
    let comment_article = comment_item.querySelector(".comment_article");
    let edit_comment_form = comment_item.querySelector(".edit_comment");
    let edit_comment_textarea = comment_item.querySelector("#edit_comment_textarea");
    comment_item.querySelector(".buttons").classList.add("hide");
    comment_article.classList.add("hide");
    edit_comment_form.classList.remove("hide");
    edit_comment_textarea.value = comment_article.innerHTML;
    /*Save Comment Listener*/
    edit_comment_form.addEventListener("submit", saveComment);
};
function saveComment(event){
    event.preventDefault();
    let comment_item = event.target.closest(".comment_item");
    let comment_article = comment_item.querySelector(".comment_article");
    let edit_comment_textarea = comment_item.querySelector("#edit_comment_textarea");
    if (edit_comment_textarea.value.length > 0){
        edit_comment_textarea.classList.remove("error");
        comment_article.classList.remove("hide");
        comment_article.innerHTML = edit_comment_textarea.value;
        comment_item.querySelector(".edit_comment").classList.add("hide");
        comment_item.querySelector(".buttons").classList.remove("hide");
    } else{
        edit_comment_textarea.classList.add("error");
    }
};
function deleteComment(event){
    let buttons = event.target.closest(".buttons");
    buttons.classList.add("active");
    buttons.querySelector(".no_btn").addEventListener("click", function(){
        buttons.classList.remove("active");
    });
    /*Confirm Listener*/
    let comment_item = event.target.closest(".comment_item");
    let confirm_forms = comment_item.querySelectorAll(".confirm_form");
    confirm_forms.forEach(function(active_confirm){
        active_confirm.addEventListener("submit", confirmComment);
    });
};  
function confirmComment(event){
    event.preventDefault();
    /* Responses Count*/
    let forum_item = event.target.closest(".forum_item");
    let responses = forum_item.querySelector(".responses");
    event.target.closest(".comment_item").remove();
    let posted_comment= forum_item.querySelector("#posted_comment");
    responses.innerHTML = posted_comment.children.length + " Responses";
    if (posted_comment.children.length == 0){
        forum_item.classList.remove("add_comment");
    }
};