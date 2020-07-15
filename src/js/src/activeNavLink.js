
const navLinks = document.querySelectorAll('.navigation__link');
const navItems = document.querySelectorAll('.navigation__item');

navLinks.forEach( el => el.addEventListener('click', activeItem));

function activeItem () {

    navItems.forEach(item => item.classList.remove('navigation__item_active'));
    this.closest('.navigation__item').classList.add('navigation__item_active');
    this.preventDefault();
}

export { activeItem };

