let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    
    // Asegúrate de que el índice esté dentro del rango
    if (index >= slides.length) {
        currentSlide = 0; // Vuelve al primer slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Va al último slide
    } else {
        currentSlide = index; // Establece el slide actual
    }

    // Oculta todas las imágenes
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active'); // Muestra la imagen activa
        }
    });
}

// Cambia el slide
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Muestra el primer slide al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});