const mainCont = document.querySelector('.main-cont');

const scrollbarAlert = document.querySelector('#scrollbar-alert');
const scrollbarSwitch = document.querySelector('#scroll-switch');
const alertCloseSvg = document.querySelector('#svg-alert-x');
const alertCloseBtn = document.querySelector('#scroll-off');
const alertAddScroll = document.querySelector('#scroll-on');

function closeAlert() {
    scrollbarAlert.classList.remove('opacity-100');
    scrollbarAlert.classList.add('opacity-0');
    setTimeout(() => {
        scrollbarAlert.classList.add('-z-50');
    }, 300);
    return;
};

function removeScroll() {
    mainCont.classList.add('scrollbar-none');
    closeAlert();
    return;
};

function addScroll() {
    mainCont.classList.remove('scrollbar-none');
    closeAlert();
    return;
};

function openAlert() {
    scrollbarAlert.classList.remove('-z-50');
    scrollbarAlert.classList.remove('opacity-0');
    scrollbarAlert.classList.add('opacity-100');
    clearTimeout(autoOpenAlert);
    return; 
};

alertCloseSvg.addEventListener('click', closeAlert);
alertCloseBtn.addEventListener('click', removeScroll);
alertAddScroll.addEventListener('click', addScroll);
scrollbarSwitch.addEventListener('click', openAlert);

const autoOpenAlert = setTimeout(openAlert, 4000);