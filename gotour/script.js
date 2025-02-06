let index = 0;
function moveSlide(step) {
    const container = document.getElementById("carousel-container");
    const totalSlides = container.children.length;
    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}
