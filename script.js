const START_DATE = new Date("2026-06-23T00:00:00");

function updateCounter() {
    const now = new Date();
    let diff = now - START_DATE;

    if (diff < 0) diff = 0;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});

const particles = document.getElementById("particles");

function createParticle() {
    const particle = document.createElement("div");

    particle.className = "particle";
    particle.textContent = Math.random() > 0.25 ? "♥" : "✦";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.fontSize = 8 + Math.random() * 15 + "px";
    particle.style.animationDuration = 7 + Math.random() * 8 + "s";

    particles.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 16000);
}

setInterval(createParticle, 650);

for (let i = 0; i < 12; i++) {
    setTimeout(createParticle, i * 250);
}

const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");

secretButton.addEventListener("click", () => {
    secretMessage.classList.add("visible");
    secretButton.textContent = "Я уже всё сказала... ❤️";
    secretButton.disabled = true;

    for (let i = 0; i < 35; i++) {
        setTimeout(createParticle, i * 60);
    }

    secretMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
