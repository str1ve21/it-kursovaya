const mainCont = document.querySelector('.main-cont');

let sessionStorageScrollData = sessionStorage.getItem('isScrollAdded');

if (sessionStorageScrollData) {
    mainCont.classList.remove('scrollbar-none');
};

if (sessionStorageScrollData === false) {
    mainCont.classList.add('scrollbar-none');
};