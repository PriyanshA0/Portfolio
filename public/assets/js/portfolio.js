const revealElements = document.querySelectorAll(".reveal");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const carouselTrack = document.querySelector(".carousel-track");
const carouselButtons = document.querySelectorAll(".carousel-btn");
const themeToggle = document.getElementById("themeToggle");

// Theme handling
function applyTheme(theme){
  if(theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  try{ localStorage.setItem('theme', theme); }catch(e){}
  if(themeToggle) themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Initialize theme from localStorage or prefers-color-scheme
(function(){
  try{
    const saved = localStorage.getItem('theme');
    if(saved) { applyTheme(saved); return; }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }catch(e){ applyTheme('light'); }
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });
}

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

// Basic GitHub activity widget: looks for a socials link to GitHub and fetches recent public events
async function loadGithubActivity(){
  const ghLink = Array.from(document.querySelectorAll('.social-card a, .social-card')).find(a => {
    try{ return (a.href && a.href.includes('github.com')) || (a.querySelector && a.querySelector('a') && a.querySelector('a').href.includes('github.com'));
    }catch(e){return false}
  });

  let username = null;
  const anchors = document.querySelectorAll('.social-card');
  anchors.forEach((card) => {
    const a = card.querySelector ? card.querySelector('a') : null;
  });

  // fallback: scan all anchors on page
  if(!username){
    const all = Array.from(document.querySelectorAll('a'));
    for(const a of all){
      if(a.href && a.href.includes('github.com')){
        const parts = a.href.split('/').filter(Boolean);
        username = parts[parts.length-1];
        break;
      }
    }
  }

  const container = document.getElementById('github-activity');
  if(!container) return;
  if(!username){ container.textContent = 'No GitHub link found in socials.'; return; }

  container.textContent = 'Loading GitHub activity for ' + username + '...';
  try{
    const res = await fetch('https://api.github.com/users/' + username + '/events/public');
    if(!res.ok) throw new Error('rate or error');
    const events = await res.json();
    const recent = events.slice(0,5).map(ev => {
      const repo = ev.repo ? ev.repo.name : '';
      const type = ev.type.replace(/Event$/,'');
      const date = new Date(ev.created_at).toLocaleDateString();
      return `<div style="margin-bottom:0.6rem"><strong>${type}</strong> — <span style="opacity:0.9">${repo}</span> <span style="color:var(--muted);font-size:0.9rem">${date}</span></div>`;
    }).join('');
    container.innerHTML = `<h3 style="margin:0 0 0.6rem">Recent GitHub activity</h3>` + (recent || '<div>No recent public events</div>');
  }catch(e){
    container.textContent = 'Could not load GitHub activity (rate-limited).';
  }
}

document.addEventListener('DOMContentLoaded', () => loadGithubActivity());
