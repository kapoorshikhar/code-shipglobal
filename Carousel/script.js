// JavaScript for Carousel

let slideIndex = 0;
showSlides(slideIndex);

// Show the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide")[0];
    let dots = document.getElementsByClassName("dot");
    let totalSlides = slides.getElementsByTagName("img").length;

    if (n >= totalSlides) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

// Next/previous controls
function nextSlide() {
    showSlides(++slideIndex);
}

function prevSlide() {
    showSlides(--slideIndex);
}

// Indicator controls
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Handle image errors by setting a fallback image
document.querySelectorAll('.carousel-slide img').forEach(img => {
    img.onerror = function () {
        this.src = 'fallback.jpg';
    };
});
