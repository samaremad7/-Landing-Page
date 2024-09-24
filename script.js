/*header (nav bar) */
const checkBox = document.getElementById('check');
const nav = document.querySelector('.nav-links');
function handleMediaChange(e) {
if (e.matches) {
    nav.style.display = 'none'; 
} else {
    nav.style.display = 'block'; 
}
}
const mediaQuery = window.matchMedia("(max-width: 950px)");
handleMediaChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaChange); 
checkBox.addEventListener('change', function() {
if (this.checked) {
    nav.style.display = 'block'; 
} else {
    nav.style.display = 'none'; 
}
});
/*slider */
let currentIndex = 0;
function showSlide(index) {
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = 'translateX(' + (-currentIndex * 20) + '%)';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
