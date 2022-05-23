const scrollContainer = document.querySelector('.main-cont');
    scrollContainer.addEventListener('wheel', (event) => {
        scrollContainer.scrollLeft += window.innerWidth * (event.deltaY / 100);
}, {passive: true});