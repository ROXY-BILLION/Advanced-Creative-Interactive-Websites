// Feature 1 Mobile Navigation

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

/*** Open and Close Navigation ***/

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

/*** Close Navigation After Selecting a Link ***/

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/*** Close Navigation When Clicking Outside ***/

document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

/*** Close Navigation With Escape Key ***/

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

/*** Feature 2: Scroll Reveal ***/

const revealElements = document.querySelectorAll(
    ".studio-section, .service-card, .project-card, .process-item, .team-card"
);

/*** Observe Elements ***/

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

/*** Start Observing ***/

revealElements.forEach((element) => {
    element.classList.add("reveal");

    revealObserver.observe(element);
});


/***Feature 3: Animated Counters ***/

const counters = document.querySelectorAll("[data-count]");

/*** Counter Animation Function ***/

function animateCounter(counter) {
    const target = Number(counter.dataset.count);
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentValue = Math.floor(target * progress);

        counter.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    }

    requestAnimationFrame(updateCounter);
}

/*** Observe Counter Section ***/

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

/*** Start Observing Counters ***/

counters.forEach((counter) => {
    counterObserver.observe(counter);
});