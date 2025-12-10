const app = document.querySelector('#app');

// Global State
const state = {
  mouseX: 0,
  mouseY: 0,
};

// Parallax Effect
document.addEventListener('mousemove', (e) => {
  state.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  state.mouseY = (e.clientY / window.innerHeight) * 2 - 1;

  document.querySelectorAll('.parallax').forEach(el => {
    const speed = el.getAttribute('data-speed') || 20;
    const x = state.mouseX * speed;
    const y = state.mouseY * speed;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: Stop observing once visible
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function initAnimations() {
  const animatedElements = document.querySelectorAll('.animate-drop, .animate-scale, .animate-fade-up');
  animatedElements.forEach(el => observer.observe(el));
}

function render() {
  const hash = window.location.hash;

  // Basic Routing
  let content = '';

  // Common Header
  const header = window.Header();
  const footer = window.Footer();

  if (hash.startsWith('#field/')) {
    const fieldId = hash.split('/')[1];
    content = `
      ${header}
      <main>
        ${window.FieldView(fieldId)}
      </main>
      ${footer}
    `;
  } else if (hash.startsWith('#university/')) {
    const parts = hash.split('/');
    const fieldId = parts[1];
    const uniId = parts[2];
    content = `
      ${header}
      <main>
        ${window.UniversityView(fieldId, uniId)}
      </main>
      ${footer}
    `;
  } else if (hash === '#freelancing') {
    content = `
      ${header}
      <main>
        ${window.FreelancingView()}
      </main>
      ${footer}
    `;
  } else if (hash === '#about') {
    content = `
      ${header}
      <main>
        ${window.AboutView()}
      </main>
      ${footer}
    `;
  } else {
    // Default Home
    content = `
      ${header}
      <main>
        ${window.Hero()}
        ${window.CareerPathways()}
      </main>
      ${footer}
    `;
  }

  app.innerHTML = content;
  window.scrollTo(0, 0);

  // Initialize animations after render
  setTimeout(initAnimations, 100);
}



// Listen for hash changes
window.addEventListener('hashchange', render);

// Initial render
render();
