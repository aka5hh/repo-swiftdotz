// Use the scroll-container as the observer root (not the viewport/body)
// This ensures correct intersection detection when snap is on a child container
const scrollContainer = document.querySelector('.scroll-container');
const sourcing = document.getElementById('sourcing');
const content = document.getElementById('sourcing-content');
const plane = document.getElementById('airplane-wrap');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      content.classList.add('visible');
      plane.classList.add('visible');
    } else {
      // Reset so animation replays each time section snaps in
      content.classList.remove('visible');
      plane.classList.remove('visible');
    }
  });
}, {
  root: scrollContainer, // observe within scroll-container, not the window
  threshold: 0.5
});

observer.observe(sourcing);

// Mobile support for dropdown menus
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Toggles the active class when tapped
    item.classList.toggle('active');
  });
});
