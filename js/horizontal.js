const scrollContainer = document.querySelector('.main-cont');
    scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += window.innerWidth * (event.deltaY / 100);
});