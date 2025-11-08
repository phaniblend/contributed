// Main application entry point
console.log('contributEd Platform loaded');

// Simple router
const routes = {
  '/': 'home',
  '/projects': 'projects',
  '/workspace': 'workspace',
  '/portfolio': 'portfolio'
};

function router() {
  const path = window.location.pathname;
  const page = routes[path] || 'home';
  loadPage(page);
}

function loadPage(page) {
  const main = document.getElementById('main-content');
  main.innerHTML = `<h2>Loading ${page}...</h2>`;
  // Load page content dynamically
}

// Initialize
document.addEventListener('DOMContentLoaded', router);
