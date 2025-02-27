console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("comment-form");
  const authorInput = document.getElementById("author");
  const commentText = document.getElementById("comment-text");
  const submitButton = document.getElementById("submit-comment");
  const commentList = document.getElementById("comment-list");

  submitButton.addEventListener("click", () => {
    const author = authorInput.value.trim();
    const comment = commentText.value.trim();

    if (!author || !comment) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }
    
    const commentData = `${author},${commentText}\n`;

    const commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");
    commentItem.innerHTML = `
      <p><strong>${author}</strong></p>
      <p>${comment}</p>
    `;

    commentList.appendChild(commentItem);

    form.reset();
    alert("댓글이 등록되었습니다.");
  });
});
