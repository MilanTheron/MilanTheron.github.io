document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const pages = [
        "sections/VersionFrançaise.html",
        "sections/about.html",
        "sections/education.html",
        "sections/experience.html",
        "sections/lien.html",
        "sections/projects.html",
        "sections/skills.html"
    ];

    function showPage() {
        window.location.href = pages[index];
    }

    document.getElementById("nextBtnFr").addEventListener("click", function () {
        index = (index + 1) % pages.length;
        showPage();
    });

    document.getElementById("prevBtnFr").addEventListener("click", function () {
        index = (index - 1 + pages.length) % pages.length;
        showPage();
    });
});
