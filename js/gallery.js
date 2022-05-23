const galleryImg = document.querySelector('#gallery-image');
const plusImg = document.querySelector('#gallery-img-plus');
const minusImg = document.querySelector('#gallery-img-minus');

const currentSiteFolder = document.querySelector('.galleryMatch').id;

let currentImg = 1;

galleryImg.src = `../assets/${currentSiteFolder}/img1.webp`;

function eventPlusImg() {
    currentImg += 1;
    if (currentImg === 5) {
        currentImg = 1;
    };
    galleryImg.src = `../assets/${currentSiteFolder}/img${currentImg}.webp`;
};

function eventMinusImg() {
    currentImg -= 1;
    if (currentImg === 0) {
        currentImg = 4;
    };
    galleryImg.src = `../assets/${currentSiteFolder}/img${currentImg}.webp`;
};

plusImg.addEventListener('click', eventPlusImg);
minusImg.addEventListener('click', eventMinusImg);
