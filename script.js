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
