document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "res/p1.png", link: "Projet/p1.html", alt: "Projet 1" },
        { src: "res/p2.png", link: "Projet/p2.html", alt: "Projet 2" }
    ];

    const carouselContainer = document.getElementById("carousel-container");

    images.forEach(image => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        const link = document.createElement("a");
        link.href = image.link;

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        link.appendChild(img);
        carouselItem.appendChild(link);
        carouselContainer.appendChild(carouselItem);
    });

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentIndex = 0;
    const totalItems = images.length;

    function showItem(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    });

    showItem(currentIndex);
});