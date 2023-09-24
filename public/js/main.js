const bars = document.querySelector('.bars');
const nav = document.querySelector('nav');
const navAnimation = document.querySelector('.nav-animation');
const navContent = document.querySelector('.nav-content');
const navLinks = document.querySelectorAll('nav a');

const swiperOptions = {
  breakpoints: {
    680: { slidesPerView: 2, spaceBetween: 30 },
    1200: { slidesPerView: 3, spaceBetween: 40 },
    1480: { slidesPerView: 4, spaceBetween: 40 },
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
};

window.addEventListener('DOMContentLoaded', () => {
  const closeNav = () => {
    document.body.classList.remove('overflow-hidden');

    nav.classList.remove('open');
    navAnimation.classList.remove('open');
    bars.classList.remove('open');
    navContent.classList.remove('open');
  };

  const openNav = () => {
    document.body.classList.add('overflow-hidden');

    nav.classList.add('open');
    navAnimation.classList.add('open');
    bars.classList.add('open');
    navContent.classList.add('open');
  };

  const toggleNav = () => {
    nav.classList.contains('open') ? closeNav() : openNav();
  };

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    toggleNav();
  });

  bars.addEventListener('click', toggleNav);
  navLinks.forEach((link) => link.addEventListener('click', closeNav));

  new Swiper('.swiper', swiperOptions);
});
