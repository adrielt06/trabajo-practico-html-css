document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn-tema');
    const iconoTema = btnTema.querySelector('i');
    
    // Función central para aplicar el tema
    const aplicarTema = (modo) => {
        // Al asignar el atributo al html, CSS automáticamente cambia las variables :root
        document.documentElement.setAttribute('data-theme', modo);
        localStorage.setItem('temaViajes', modo); // Guardarlo cruzado en sesiones
        
        // Cambiamos el logo del botón para reflejar la acción opuesta (o estado actual)
        if (modo === 'dark') {
            iconoTema.classList.remove('fa-moon');
            iconoTema.classList.add('fa-sun'); // Si es oscuro mostramos icono de sol para volver a claro
        } else {
            iconoTema.classList.remove('fa-sun');
            iconoTema.classList.add('fa-moon'); // Si es claro mostramos luna
        }
    };

    // 1. Verificamos si el usuario ya tenía una preferencia guardada de antes
    const temaGuardado = localStorage.getItem('temaViajes');
    
    // 2. Comprobación opcional corporativa premium: Verificamos si su SO ya está oscurecido
    const temaSistemaEsOscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Evaluamos e inicializamos
    if (temaGuardado) {
        aplicarTema(temaGuardado);
    } else if (temaSistemaEsOscuro) {
        aplicarTema('dark');
    } else {
        aplicarTema('light'); // default
    }

    // 3. Agregamos la interactividad al botón
    btnTema.addEventListener('click', () => {
        const temaActual = document.documentElement.getAttribute('data-theme') || 'light';
        // Alternamos el estado
        if (temaActual === 'dark') {
            aplicarTema('light');
        } else {
            aplicarTema('dark');
        }
    });
});
