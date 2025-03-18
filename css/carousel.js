document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("carousel-container");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const knowMoreButton = document.getElementById("know-more-button");
    
    let index = 0;
    const totalItems = items.length;

    // Function to update the carousel and adjust the button
    function updateCarousel() {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        // Update the "En savoir plus" button based on the current index
        const projectLinks = [
            "../Projet/p1Anglais.html",  // Link for Projet 1
            "../Projet/p2Anglais.html",  // Link for Projet 2
            "../Projet/p3Anglais.html"   // Link for Projet 3
        ];

        // Set the button link according to the current carousel item
        knowMoreButton.href = projectLinks[index];
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Initial update
    updateCarousel();
});
