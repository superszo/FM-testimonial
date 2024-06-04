
let slides = document.getElementById('slides').children;
let slideIndex = 0;

showSlide(0, 'next')


function nextSlide () {
    if (slideIndex + 1 > slides.length -1 ) {
        slideIndex = 0;
    } else {
        slideIndex += 1;
    }
    showSlide(slideIndex, 'next')
}

function prevSlide () {
    if (slideIndex - 1 < 0 ) {
        slideIndex = slides.length -1;
    } else {
        slideIndex -= 1;
    }
    showSlide(slideIndex, 'prev')
}


function showSlide (x, dir) {

    
    for (slide of Array.from(slides)) {
        slide.style.display = "none";
        slide.classList.remove('slide-prev');
        slide.classList.remove('slide-next');
    }

    if (dir === "next") {
        slides[x].style.display = "flex";
        slides[x].classList.toggle('slide-next')
    } else if (dir === "prev") {
        slides[x].style.display = "flex";
        slides[x].classList.toggle('slide-prev')
    }
}

for (prev of Array.from(document.getElementsByClassName('prev'))) {
    prev.addEventListener('click', prevSlide)
}

for (next of Array.from(document.getElementsByClassName('next'))) {
    next.addEventListener('click', nextSlide)
}

window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        prevSlide()
    } else if (e.key === "ArrowRight") {
        nextSlide()
    }
})

