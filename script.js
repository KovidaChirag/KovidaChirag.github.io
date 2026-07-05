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
