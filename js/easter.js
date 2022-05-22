const clickCont = document.querySelector('.clickCont');
const easterGif = document.querySelector('.easter-egg');
let clickedToEaster = 0;
let isEaster = false;

clickCont.addEventListener('click', () => {
    clickedToEaster += 1;
    console.log(isEaster, clickedToEaster);
    if (clickedToEaster % 5 === 0 && isEaster === false) {
        isEaster = true;
        easterGif.classList.remove('hidden');
        return;
    };
    if (clickedToEaster % 5 === 0 && isEaster === true) {
        isEaster = false;
        easterGif.classList.add('hidden');
        return;
    };
});