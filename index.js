const toggleMenu = (() => {
  const menuItems = document.querySelectorAll('.main-menu');

  function display() {
    this.querySelector('ul').classList.toggle('visible');
  }

  menuItems.forEach((item) => {
    item.addEventListener('click', display);
  });

  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('.main-menu-mobile');

  function display() {
    menu.classList.toggle('visible');
  }

  menuBtn.addEventListener('click', display);
})();

module.esports.toggleMenu = toggleMenu;
