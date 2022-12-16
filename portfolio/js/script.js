function controlMenu() {
  menu = document.getElementsByClassName('navbar-menu__show')[0];
  button = document.getElementById('menuButton')
  if (menu.style.display == 'flex') {
    menu.style.display = 'none'
    button.textContent = 'menu'
  } else {
    menu.style.display = 'flex'
    button.textContent = 'close'
    var w = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    menu.style.width = w + 'px'
  }
};