const addCommentBtn = document.getElementById("addCommentBtn");
const commentInput = document.getElementById("commentInput");
const commentsContainer = document.getElementById("commentsContainer");

addCommentBtn.addEventListener("click", function() {

    const commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("El comentario no puede estar vacío.");
        return;
    }

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = commentText;

    const now = new Date();
    const dateTime = document.createElement("small");
    dateTime.textContent = "Publicado el " + now.toLocaleDateString() + " a las " + now.toLocaleTimeString();

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        commentsContainer.removeChild(commentDiv);
    });

    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(dateTime);
    commentDiv.appendChild(deleteBtn);

    commentsContainer.appendChild(commentDiv);

    commentInput.value = "";
});