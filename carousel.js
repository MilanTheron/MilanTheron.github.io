    const projectFolder = "Projet";
    const imageFolder = "res";

    async function loadProjects() {
        try {
            const projectFiles = ["p1.html", "p2.html"];
            const carouselContainer = document.getElementById("carousel-container");

            projectFiles.forEach((file) => {
                const projectName = file.split(".")[0]; 
                const projectImage = `${imageFolder}/${projectName}.png`;

                const carouselItem = document.createElement("div");
                carouselItem.classList.add("carousel-item");
                carouselItem.innerHTML = `
                    <a href="${projectFolder}/${file}">
                        <img src="${projectImage}" alt="${projectName}" style="width: 100%; border-radius: 8px;">
                    </a>
                `;
                carouselContainer.appendChild(carouselItem);
            });

            const firstItem = document.querySelector(".carousel-item");
            if (firstItem) firstItem.classList.add("active");
        } catch (error) {
            console.error("Erreur lors du chargement des projets :", error);
        }
    }

    function setupCarousel() {
        const carouselItems = document.querySelectorAll(".carousel-item");
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");

        let currentIndex = 0;

        function updateCarousel(index) {
            carouselItems.forEach((item, i) => {
                item.style.transform = `translateX(${100 * (i - index)}%)`;
            });
        }

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel(currentIndex);
        });

        updateCarousel(currentIndex);
    }

    document.addEventListener("DOMContentLoaded", () => {
        loadProjects().then(setupCarousel);
    });
