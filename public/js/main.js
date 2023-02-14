const bars = document.querySelector('.bars');
const nav = document.querySelector('nav');
const navAnimation = document.querySelector('.nav-animation');
const navContent = document.querySelector('.nav-content');
const navLinks = document.querySelectorAll('nav a');
const cardIcons = document.querySelectorAll('.card-icon');

let funMode = false;

const swiperOptions = {
  breakpoints: {
    680: { slidesPerView: 2, spaceBetween: 30 },
    1200: { slidesPerView: 3, spaceBetween: 40 },
    1480: { slidesPerView: 4, spaceBetween: 40 },
  },
  loop: true,
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  pagination: { el: '.swiper-pagination', clickable: true },
  slidesPerView: 1,
  spaceBetween: 10,
};

function initFunMode() {
  funMode = true;
  document.body.classList.remove('pre-load');
}

function init() {
  const close = () => {
    document.body.style.overflowY = 'auto';
    nav.classList.remove('open');
    navAnimation.classList.remove('open');
    bars.classList.remove('open');
    navContent.classList.remove('open');
  };

  const open = () => {
    document.body.style.overflowY = 'hidden';

    nav.classList.add('open');
    navAnimation.classList.add('open');
    bars.classList.add('open');
    navContent.classList.add('open');
  };

  const toggle = () => {
    const isOpen = nav.classList.contains('open');
    isOpen ? close() : open();
  };

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    toggle();
  });

  bars.addEventListener('click', toggle);
  navLinks.forEach((link) => link.addEventListener('click', close));

  cardIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      !funMode && initFunMode();
      document.body.classList.toggle('barrel-roll');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  init();

  new Swiper('.swiper', swiperOptions);
});
