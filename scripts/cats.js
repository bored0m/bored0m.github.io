document
  .getElementById("load-cat-button")
  .addEventListener("click", async () => {
    const modal = document.getElementById("myModal");
    const catImage = document.getElementById("cat-image");

    if (catImage.src) {
      modal.style.display = "block";
      return;
    }
  });

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};