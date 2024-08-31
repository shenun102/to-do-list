// modal.js

export function openModal(event) {
  modal.classList.add("show");
  toggleOverlay();
}

export function closeModal(event) {
  modal.classList.remove("show");
  toggleOverlay();
}

function toggleOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hide");
}
