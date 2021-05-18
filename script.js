const COUNT_SLIDE = 4;
let indexActiveSlide = 0;

function nextSlide() {
    if (indexActiveSlide === COUNT_SLIDE-1) {
        indexActiveSlide = 0
    } else {
        indexActiveSlide += 1;
    }

    updateMargin();
}

function prevSlide() {
    if (indexActiveSlide === 0) {
        indexActiveSlide = COUNT_SLIDE-1
    } else {
        indexActiveSlide -= 1;
    }

    updateMargin();
}

function updateMargin() {
    document.getElementById("manager-slide")
        .style.marginLeft = indexActiveSlide * 600 * -1 + 'px';
}