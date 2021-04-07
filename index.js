function toggleMenu() {
  const menuItems = document.querySelectorAll('.main-menu');

  function display() {
    this.querySelector('ul').classList.toggle('visible');
  }

  menuItems.forEach((item) => {
    item.addEventListener('click', display);
  });
}

module.esports.toggleMenu = toggleMenu;
