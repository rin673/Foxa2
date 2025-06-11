let currentSlide = 1;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index - 1].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide % 3) + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 2 + 3) % 3 + 1;
    showSlide(currentSlide);
}

// 最初のスライドを表示
showSlide(currentSlide);