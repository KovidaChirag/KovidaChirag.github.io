const text = "Software Developer | Spring Boot | PostgreSQL | Data Analysis";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 90);
    }
}
typingEffect();

/* Scroll animation */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});
