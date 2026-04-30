// Home Page Specific Scripts
// Add page-specific JavaScript here if needed
// Home Page Scripts — Hunter Store

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = (i * 0.07) + 's';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile Nav Toggle
document.getElementById('navToggle')?.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.toggle('active');
});