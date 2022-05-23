const mainCont = document.querySelector('.main-cont');

let isScrollAdded = sessionStorage.getItem('isScrollAdded');
console.log(isScrollAdded)

if (isScrollAdded === 'true') {
    mainCont.classList.remove('scrollbar-none');
};

if (isScrollAdded === 'false') {
    mainCont.classList.add('scrollbar-none');
};