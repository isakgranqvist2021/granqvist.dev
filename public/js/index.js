const toggleNav = () => {
  const barsLines = document.querySelectorAll(".bars-line");
  const navLinks = document.querySelector(".nav-links");
  const backdrop = document.querySelector(".backdrop");

  const elements = Array.from([...barsLines, navLinks, backdrop]);

  elements.forEach((element) => {
    element.classList.toggle("open");
  });
};

const closeNav = () => {
  const barsLines = document.querySelectorAll(".bars-line");
  const navLinks = document.querySelector(".nav-links");
  const backdrop = document.querySelector(".backdrop");

  const elements = Array.from([...barsLines, navLinks, backdrop]);

  elements.forEach((element) => {
    element.classList.remove("open");
  });
};
