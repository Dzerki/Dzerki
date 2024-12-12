

//Верхняя панель
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("show-panel");
});




const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

// Функция обновления слайда
function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Автоматическое переключение слайдов
function startAutoSlide() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 3000); // Интервал в 3000 мс (3 секунды)
}

// Запуск слайдера
startAutoSlide();



