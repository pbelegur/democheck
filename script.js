document.getElementById("recommendations-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const recommendationSection = document.getElementById("recommendations");
    if (recommendationSection) {
        if (recommendationSection.classList.contains("hidden")) {
            recommendationSection.classList.remove("hidden");
            recommendationSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
        } else {
            recommendationSection.classList.add("hidden");
        }
    }
});

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const navBarHeight = document.querySelector("nav")?.offsetHeight || 0; // Adjust for sticky navigation bar height
        const sectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset - navBarHeight;

        window.scrollTo({
            top: sectionTop,
            behavior: "smooth", // Smooth scrolling for a better experience
        });
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

