// Detect when the navbar is expanded or collapsed
const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('#navbarNav');

navbarCollapse.addEventListener('show.bs.collapse', function () {
  navbar.classList.add('navbar-expanded');
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
  navbar.classList.remove('navbar-expanded');
});