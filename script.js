document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".img-home");
  let currentIndex = 0;

  function nextImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  setInterval(nextImage, 5000);
});

// Função para rolar o carrossel para a esquerda ou direita
