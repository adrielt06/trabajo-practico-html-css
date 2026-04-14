document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");
    const btnSubmit = document.getElementById("btn-submit");
    const modal = document.getElementById("modal-confirmacion");
    const btnCerrarModal = document.getElementById("btn-cerrar-modal");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitamos que la página se recargue

        // Agregamos la clase de carga al botón simulando envio asincrono
        btnSubmit.classList.add("cargando");
        btnSubmit.disabled = true;

        // Simulamos un retraso de red de 2 segundos (efecto spinner)
        setTimeout(() => {
            btnSubmit.classList.remove("cargando");
            btnSubmit.disabled = false;
            
            // Mostramos el modal de éxito
            modal.classList.add("mostrar");
            
            // Reseteamos el formulario
            form.reset();
        }, 2000);
    });

    // Lógica para cerrar el modal
    btnCerrarModal.addEventListener("click", () => {
        modal.classList.remove("mostrar");
    });
    
    // Cerrar si el usuario hace click fuera de la ventana del modal
    modal.addEventListener("click", (e) => {
        if(e.target === modal) {
            modal.classList.remove("mostrar");
        }
    });

    // Opcional: Cerrar modal con la tecla Esc
    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && modal.classList.contains("mostrar")) {
            modal.classList.remove("mostrar");
        }
    });
});
