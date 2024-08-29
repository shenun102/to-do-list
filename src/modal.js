export function openModal(event) {
  event.preventDefault();
  modal.classList.add("show");
  toggleOverlay();
}

export function closeModal(event) {
  event.preventDefault();
  modal.classList.remove("show");
  toggleOverlay();
}

function toggleOverlay() {
  const overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hide");
}
