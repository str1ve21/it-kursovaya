
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
};

function removeScroll() {
    mainCont.classList.add('scrollbar-none');
    sessionStorage.setItem('isScrollAdded', 'false');
    closeAlert();
};

function addScroll() {
    mainCont.classList.remove('scrollbar-none');
    sessionStorage.setItem('isScrollAdded', 'true');
    closeAlert();
};

function openAlert() {
    scrollbarAlert.classList.remove('-z-50');
    scrollbarAlert.classList.remove('opacity-0');
    scrollbarAlert.classList.add('opacity-100');
    scrollbarAlert.classList.add('z-50');
    clearTimeout(autoOpenAlert); 
};

alertCloseSvg.addEventListener('click', closeAlert);
alertCloseBtn.addEventListener('click', removeScroll);
alertAddScroll.addEventListener('click', addScroll);
scrollbarSwitch.addEventListener('click', openAlert);

const autoOpenAlert = setTimeout(() => {
    if (window.innerWidth >= 1024 && sessionStorage.getItem('isScrollAdded') === null) {
        openAlert();
    };
}, 4000);