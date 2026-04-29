const revealElements = document.querySelectorAll(".reveal");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const carouselTrack = document.querySelector(".carousel-track");
const carouselButtons = document.querySelectorAll(".carousel-btn");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (carouselTrack && carouselButtons.length) {
  carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.direction === "next" ? 1 : -1;
      carouselTrack.scrollBy({
        left: carouselTrack.clientWidth * 0.8 * direction,
        behavior: "smooth",
      });
    });
  });

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  carouselTrack.addEventListener("pointerdown", (event) => {
    isDown = true;
    startX = event.pageX - carouselTrack.offsetLeft;
    scrollLeft = carouselTrack.scrollLeft;
  });

  carouselTrack.addEventListener("pointerleave", () => {
    isDown = false;
  });

  carouselTrack.addEventListener("pointerup", () => {
    isDown = false;
  });

  carouselTrack.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - carouselTrack.offsetLeft;
    const walk = (x - startX) * 1.4;
    carouselTrack.scrollLeft = scrollLeft - walk;
  });
}

if (revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}
