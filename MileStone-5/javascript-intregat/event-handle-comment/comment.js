// // step 1 set addEventListener to the post button
// const postBtn = document.getElementById('comment-button').addEventListener('click', function(){
//     //step2 get comment from textarea
//     const commentBox = document.getElementById('comment-box');
//     const getComment = commentBox.value;

//     // step3 set the comment inside the comment display
//     const commentDisplay = document.getElementById('comment-here');
//     // create a paragraph comment 
//     const p = document.createElement('p');
//     // set p value
//     p.innerText = getComment;
//     //set p inside into comment display
//     commentDisplay.appendChild(p);
//     // clear the textarea
//     commentBox.value = '';
// })



//again start practice with comment add

//step1 get the post button for work with comment 
const postButton = document.getElementById('comment-button').addEventListener('click', function(){
    //step2 get the comment from the textarea
    const commentBox = document.getElementById('comment-box');
    // set the comment value
    const getComment = commentBox.value;
    
    //step3 get the comment area
    const displayComment = document.getElementById('comment-here');
    //now create a comment element with paragraph
    const p = document.createElement('p');
    p.innerText = getComment;
    // now take the comment inside into comment area
    displayComment.appendChild(p);

    // step4 clear the textarea
    commentBox.value = '';
})
// completed practice


