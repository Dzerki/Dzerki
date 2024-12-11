document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider-image"); // Получаем все изображения в слайдере
    let currentIndex = 0; // Индекс текущего активного изображения

    function showNextImage() {
        images[currentIndex].classList.remove("active"); // Убираем класс "active" с текущего изображения
        currentIndex = (currentIndex + 1) % images.length; // Переходим к следующему изображению (циклично)
        images[currentIndex].classList.add("active"); // Добавляем класс "active" к следующему изображению
    }

    images[currentIndex].classList.add("active"); // Показываем первое изображение

    setInterval(showNextImage, 7000); // Меняем изображение каждые 7 секунд
});
