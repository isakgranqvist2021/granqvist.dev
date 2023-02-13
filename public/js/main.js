function gtag() {
  dataLayer.push(arguments);
}

window.dataLayer = window.dataLayer || [];

gtag('js', new Date());
gtag('config', 'G-SFK4JQRKBG');

function toggleNav() {
  const barLines = document.querySelectorAll('.bars-line');
  const nav = document.querySelector('nav');
  const navAnimation = document.querySelector('.nav-animation');

  const isOpen = nav.classList.contains('open');

  if (isOpen) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }

  if (isOpen) {
    nav.classList.remove('open');
    navAnimation.classList.remove('open');
    barLines.forEach((line) => {
      line.classList.remove('open');
    });
  } else {
    nav.classList.add('open');
    navAnimation.classList.add('open');
    barLines.forEach((line) => {
      line.classList.add('open');
    });
  }
}

function closeNav() {
  const nav = document.querySelector('nav');
  const navAnimation = document.querySelector('.nav-animation');
  const barLines = document.querySelectorAll('.bars-line');

  nav.classList.remove('open');
  navAnimation.classList.remove('open');
  barLines.forEach((line) => {
    line.classList.remove('open');
  });
}

const swiper = new Swiper('.swiper', {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1480: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelector('.bars');
  bars.addEventListener('click', toggleNav);

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleNav();
    }
  });
});
