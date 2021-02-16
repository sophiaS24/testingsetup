function submitComment(textAreaId, commentAreaID) {

    var txtArea = document.getElementById(textAreaId);
    var comment = document.getElementById(commentAreaID);

    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<p>'+txtArea.value+'</p>'; 
    comment.appendChild(newDiv);
    console.log("comments added"); 
    txtArea.value = ""; 
}


// function submitComment() {
//     alert("The comment was submitted");
// }
// for (const btn of document.querySelectorAll('.upvote')) {
//   btn.addEventListener('click', event => {
//     event.currentTarget.classList.toggle('on');
//   });
// }
// for (const btn of document.querySelectorAll('.downvote')) {
//   btn.addEventListener('click', event => {
//     event.currentTarget.classList.toggle('on');
//   });
// }