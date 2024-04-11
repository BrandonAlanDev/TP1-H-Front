document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const image = document.querySelector(".carousel-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;
    const images = [
        "/img/HonorOfKings1.webp",
        "/img/HonorOfKings2.webp",
        "/img/HonorOfKings3.webp"
    ];
    let intervalId;

    function showImage(index) {
        image.src = images[index];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 3000);
    }

    image.addEventListener("click", resetInterval);
    prevBtn.addEventListener("click", function() {
        prevImage();
        resetInterval();
    });
    nextBtn.addEventListener("click", function() {
        nextImage();
        resetInterval();
    });

    intervalId = setInterval(nextImage, 3000);
});
