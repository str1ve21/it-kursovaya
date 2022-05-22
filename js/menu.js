const switcher = document.querySelector('#menu-switch');
const switcherMenu = document.querySelector('#menu-nav');
let isHidden = true;

switcher.addEventListener('click', () => {
    if (isHidden) {
        isHidden = false;
        switcherMenu.classList.remove('hidden');
        return;
    };

    if (isHidden === false) {
        isHidden = true;
        switcherMenu.classList.add('hidden');
        return;
    };
});