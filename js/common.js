particlesJS("particles-js", {
    particles: {
        number: {
            value: 60,
            density: { enable: true, value_area: 800 },
        },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.15, random: true },
        size: { value: 4, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.12,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.25 } },
            push: { particles_nb: 4 },
        },
    },
    retina_detect: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    },
    { threshold: 0.1 }
);

revealElements.forEach((el) => observer.observe(el));

function loadNavbar() {
    fetch("partials/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            const container = document.getElementById("navbar");
            const currentPath = window.location.pathname.split("/").pop();
            container.innerHTML = data;
            document.querySelectorAll(".nav-link").forEach((link) => {
                if (link.getAttribute("href") === currentPath) {
                    link.classList.add("active");
                }
            });
        })
        .catch((error) => console.error("Error loading navbar:", error));
}

function loadFooter() {
    fetch("partials/footer.html")
        .then((response) => response.text())
        .then((data) => {
            const container = document.getElementById("footer");
            container.innerHTML = data;
        })
        .catch((error) => console.error("Error loading footer:", error));
}

loadNavbar();
loadFooter();
