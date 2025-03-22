document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            if (!section.classList.contains("visible")) {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 50) {
                    section.classList.add("visible");
                }
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
