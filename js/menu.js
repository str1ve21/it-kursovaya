const switcher = document.querySelector('#menu-switch');
const switcherMenu = document.querySelector('#menu-nav');
let isHidden = true;

const svgStripe = document.querySelector('#svg-stripe');
const svgX = document.querySelector('#svg-x');

switcher.addEventListener('click', () => {
    if (isHidden) {
        isHidden = false;
        switcherMenu.classList.remove('opacity-0');
        switcherMenu.classList.add('opacity-100');

        svgStripe.classList.remove('opacity-100');
        svgStripe.classList.add('opacity-0');

        svgX.classList.remove('opacity-0');
        svgX.classList.add('opacity-100');

        switcherMenu.classList.remove('-z-50');
        return;
    };

    if (isHidden === false) {
        isHidden = true;
        switcherMenu.classList.remove('opacity-100');
        switcherMenu.classList.add('opacity-0');

        svgStripe.classList.remove('opacity-0');
        svgStripe.classList.add('opacity-100');

        svgX.classList.remove('opacity-100');
        svgX.classList.add('opacity-0');

        setTimeout(() => {
            switcherMenu.classList.add('-z-50');
        }, 300);
        return;
    };
});