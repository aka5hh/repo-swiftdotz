// Use the scroll-container as the observer root (not the viewport/body)
// This ensures correct intersection detection when snap is on a child container
const scrollContainer = document.querySelector('.scroll-container');
const sourcing = document.getElementById('sourcing');
const content = document.getElementById('sourcing-content');
const plane = document.getElementById('airplane-wrap');

if (scrollContainer && sourcing && content && plane) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        content.classList.add('visible');
        plane.classList.add('visible');
      } else {
        content.classList.remove('visible');
        plane.classList.remove('visible');
      }
    });
  }, {
    root: scrollContainer,
    threshold: 0.6
  });

  observer.observe(sourcing);
}
// Mobile support for dropdown menus
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {

    if (e.target.closest('.dropdown')) return;

    e.preventDefault();

    // close other menus
    navItems.forEach(nav => {
      if (nav !== item) nav.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    navItems.forEach(nav => nav.classList.remove('active'));
  }
});