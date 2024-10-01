const roles = ["Sys Admin", "Devops", "Cloud Computing"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenRoles = 2000;
const typedText = document.getElementById("typewriter");

function type() {
    if (charIndex < roles[roleIndex].length) {
        currentRole += roles[roleIndex].charAt(charIndex);
        typedText.textContent = currentRole;
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        currentRole = roles[roleIndex].substring(0, charIndex - 1);
        typedText.textContent = currentRole;
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, typingSpeed + 500);
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight - 100;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition) {
            section.classList.add('show');
        }
    });
});
