document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("carousel-container");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    
    let index = 0;
    const totalItems = items.length;

    function updateCarousel() {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    });
});

