// Seleccionamos todos los botones
const botones = document.querySelectorAll('.btn-interesa');

// Bucle para darle la instruccion a cada botón por separado
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Buscamos al "hermano" del botón (es decir, el <span> que está al lado)
        const numero = boton.nextElementSibling.querySelector('.contador-numero');
        
        // --- 1. ACTUALIZAR EL NÚMERO ---
        // Sumamos 1 a su texto actual
        numero.textContent = parseInt(numero.textContent) + 1;
        
        // --- 2. ACTIVAR LA ANIMACIÓN ---
        // Le quitamos la animación por si la tenía puesta de un click anterior
        numero.classList.remove('animar-pop');
        
        // Un truco estándar de la industria para forzar al navegador a reiniciar visualmente el elemento
        void numero.offsetWidth;
        
        // Le agregamos la clase que dispara el Keyframe del archivo CSS
        numero.classList.add('animar-pop');
    });
});
