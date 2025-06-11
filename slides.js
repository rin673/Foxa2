document.addEventListener("DOMContentLoaded", () => {
let currentSlide = 1;

// すべてのスライドを取得
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length; // スライドの合計数

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active')); // 全スライドを非表示
    slides[index - 1].classList.add('active'); // 指定したスライドのみ表示
}

function nextSlide() {
    currentSlide = (currentSlide % slideCount) + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 2 + slideCount) % slideCount + 1;
    showSlide(currentSlide);
}

// 最初のスライドを表示
showSlide(currentSlide);
