document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const span = document.getElementsByClassName("close")[0];
  
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        const text = item.querySelector(".hidden-text").textContent;
        modal.style.display = "block";
        modalImg.src = img.src;
        modalText.textContent = text;
      });
    });
  
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });