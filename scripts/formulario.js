document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("modal-ok");
  
    if (!form || !modal) return;
  
    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    };
  
    const openModal = () => {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    };
  
    modal.addEventListener("click", (e) => {
      const el = e.target;
      if (el && el.matches("[data-close]")) closeModal();
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      if (!form.checkValidity()) {
        // fuerza a que el navegador muestre estados invalid (y el CSS ya marca errores)
        form.reportValidity();
        return;
      }
  
      form.classList.add("form-enviando");
  
      // Simula envío (reemplazable por fetch real si lo necesitás)
      window.setTimeout(() => {
        form.classList.remove("form-enviando");
        form.reset();
        openModal();
      }, 1200);
    });
  });