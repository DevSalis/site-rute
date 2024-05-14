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

// Função para rolar o carrossel para a esquerda ou direita
function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
