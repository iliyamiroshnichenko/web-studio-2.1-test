(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    html: document.querySelector("html"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
    refs.modal.classList.contains("backdrop--hidden")
      ? (refs.html.style.overflow = "scroll")
      : (refs.html.style.overflow = "hidden");
  }
})();
