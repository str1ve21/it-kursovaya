const mainCont = document.querySelector('.main-cont');

const scrollbarAlert = document.querySelector('#scrollbar-alert');
const alertCloseSvg = document.querySelector('#svg-alert-x');
const alertCloseBtn = document.querySelector('#scroll-off');
const alertAddScroll = document.querySelector('#scroll-on');
let isHiddenAlert = false;

function closeAlert() {
    scrollbarAlert.classList.remove('opacity-100');
    scrollbarAlert.classList.add('opacity-0');
    setTimeout(() => {
        scrollbarAlert.classList.add('hidden');
    }, 300);
    return;
};

function addScroll() {
    mainCont.classList.remove('scrollbar-none');
    closeAlert();
    return;
};

alertCloseSvg.addEventListener('click', closeAlert);
alertCloseBtn.addEventListener('click', closeAlert);
alertAddScroll.addEventListener('click', addScroll);

setTimeout(() => {
    scrollbarAlert.classList.remove('opacity-0');
    scrollbarAlert.classList.add('opacity-100');
    return;
}, 4000);