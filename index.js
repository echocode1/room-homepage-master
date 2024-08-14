document.addEventListener("DOMContentLoaded", () => {
    /* --> script to open and exit menu bar <--  */
    const openMenu = document.getElementById('hamburger');
    const exitMenu = document.getElementById('exit-menu');
    const nav = document.getElementById('nav-link');
    const menuOverlay = document.getElementById('nav-overlay');
    const logo = document.getElementById('logo');
    const headerTop = document.getElementById('header__top');

    function openMenuBar(){
        if(window.innerWidth < 768){
            openMenu.style.display = "none";
            exitMenu.style.display = 'flex';
            logo.style.display = 'none';
            nav.style.display = 'flex';
            menuOverlay.style.display = "block"
            headerTop.style.position = 'fixed';
            headerTop.style.backgroundColor = 'white';
            headerTop.style.top = '0';
        }
    }
    openMenu.addEventListener('click', openMenuBar)

    /*  --> exit--menu <--  */
    exitMenu.onclick =() => {
        openMenu.style.display = "block";
        exitMenu.style.display = 'none';
        logo.style.display = 'flex';
        nav.style.display = 'none';
        menuOverlay.style.display = "none"
        headerTop.style.position = 'absolute';
        headerTop.style.backgroundColor = 'inherit';
    }
     
    /* carousel-slide-- mobile  */
    const mobileImgs = document.querySelectorAll('#mobile-image-slide img');
    const desktopImgs = document.querySelectorAll('#desktop-images img');
    const headers = document.querySelectorAll('#slide-headers, h1 ');
    const pText = document.querySelectorAll('#ptexts p');
    const nextIcon = document.getElementById('icon-next-m')
    const backIcon = document.getElementById('icon-prev-m')
    let currentIndex = 0;

    function updateSlide(index){
        /*   hide all element visible */
       mobileImgs.forEach(img => img.classList.add('hidden'));
       headers.forEach(header => header.classList.add('hidden'));
       pText.forEach(text => text.classList.add('hidden'));

        /*  displays them when toggled one after the other  */    
        mobileImgs[index].classList.remove('hidden');
        headers[index].classList.remove('hidden');
        pText[index].classList.remove('hidden');
    }

    /*function to slide next*/
    function slideNext(){
        currentIndex = (currentIndex + 1) % mobileImgs.length;
        updateSlide(currentIndex);
    }
    /*function to slide backward when clicked*/
    function prevSlide(){
        currentIndex = (currentIndex - 1 + mobileImgs.length)% mobileImgs.length;
        updateSlide(currentIndex);
    }
    nextIcon.addEventListener('click', slideNext);
    backIcon.addEventListener('click', prevSlide);
    updateSlide(currentIndex);

    /* carousel-slide-- desktop  */
    const nextIconD = document.getElementById('icon-next');
    const backIconD = document.getElementById('icon-previous');

    function updateslide2(index) {
        // Hide all elements
        desktopImgs.forEach(img => img.classList.add('hidden'));
        headers.forEach(header => header.classList.add('hidden'));
        pText.forEach(text => text.classList.add('hidden'));

        // Display the current slide
        desktopImgs[index].classList.remove('hidden');
        headers[index].classList.remove('hidden');
        pText[index].classList.remove('hidden');
    }

    function slideNext2() {
        currentIndex = (currentIndex + 1) % desktopImgs.length;
        updateslide2(currentIndex);
    }

    function prevSlide2() {
        currentIndex = (currentIndex - 1 + desktopImgs.length) % desktopImgs.length;
        updateslide2(currentIndex);
    }

    nextIconD.addEventListener('click', slideNext2);
    backIconD.addEventListener('click', prevSlide2);
    updateslide2(currentIndex);
})