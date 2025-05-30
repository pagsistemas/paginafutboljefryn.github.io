document.addEventListener('DOMContentLoaded', function() {
    let menuPrincipal = document.querySelector('.menu-principal');
    if (menuPrincipal) {
    menuPrincipal.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'darkgreen'; // Cambia el fondo a verde oscuro al pasar el ratón
    this.style.transition = 'background-color 0.5s ease'; // Agrega una transición suave
    });
    menuPrincipal.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#333'; // Vuelve al color de fondo original (definido en tu CSS)
    this.style.transition = 'background-color 0.5s ease'; // Agrega una transición suave
    });
    }
    });





    document.addEventListener('DOMContentLoaded', function() {
        let titulo = document.getElementById('tituloPrincipal');
        let posicion = 0;
        let direccion = 1;
        const velocidad = 1;
        if (titulo) {
        function moverTitulo() {
        posicion += direccion * velocidad;
        titulo.style.transform = `translateX(${posicion}px)`;
        if (posicion > 50) {
        direccion = -1;
        } else if (posicion < -50) {
        direccion = 1;
        }
         requestAnimationFrame(moverTitulo); }
        requestAnimationFrame(moverTitulo); }
        });




document.addEventListener('DOMContentLoaded', function() {
    let imagen = document.getElementById('imagenPrincipal');
    if (imagen) {
    imagen.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)'; // Aumenta el tamaño en un 20%
    this.style.transition = 'transform 0.3s ease-in-out'; // Transición suave
    });
    imagen.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)'; // Vuelve al tamaño original
    this.style.transition = 'transform 0.3s ease-in-out';
    });
    }
    });






