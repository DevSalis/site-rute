// script.js
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img-home');
    let currentIndex = 0;

    function nextImage() {
        images[currentIndex].style.opacity = 0; // Esconde a imagem atual
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1; // Mostra a próxima imagem
    }

    setInterval(nextImage, 5000);
});

