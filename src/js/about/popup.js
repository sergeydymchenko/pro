(() => {
  const refs = {
    openModalBtn: document.querySelector("[js-button-open]"),
    closeModalBtn: document.querySelector("[close-popup]"),
    modal: document.querySelector("[js-overlay-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();