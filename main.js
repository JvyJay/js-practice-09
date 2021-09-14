const modal = document.querySelector("#theModal");
const btn = document.querySelector("#btn");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
  modal.style.transition = "0.5s ease-in-out";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", () => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
