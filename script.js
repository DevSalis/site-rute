document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img-home');
    let currentIndex = 0;

    function nextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    setInterval(nextImage, 5000);

    document.getElementById('nextBtn').addEventListener('click', function() {
        var container = document.getElementById('box-slide-carrossel');
        sideScroll(container, 'right', 25, 100, 10);
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        var container = document.getElementById('box-slide-carrossel');
        sideScroll(container, 'left', 25, 100, 10);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.imgs-portfolio');
    const imageWidth = document.querySelector('.imgs-portfolio').clientWidth; // Largura de uma imagem
    const boxSlideCarrossel = document.getElementById('box-slide-carrossel');

    const updateCarousel = () => {
        const moveX = -(imageWidth * currentIndex);
        boxSlideCarrossel.style.transform = `translateX(${moveX}px)`;
    };

    document.getElementById('nextBtn').addEventListener('click', function () {
        if (currentIndex < images.length - 3) { // Certifica-se de não mover demais para a direita
            currentIndex++;
        } else {
            currentIndex = 0; // Volta ao início para o efeito de loop
        }
        updateCarousel();
    });

    document.getElementById('prevBtn').addEventListener('click', function () {
        if (currentIndex > 0) { // Certifica-se de não mover demais para a esquerda
            currentIndex--;
        } else {
            currentIndex = images.length - 3; // Vai para o final se estiver no início
        }
        updateCarousel();
    });
});
