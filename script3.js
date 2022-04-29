/* Индекс слайда по умолчанию */
var slideIndex3 = 1;
showSlides3(slideIndex3);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide3() {
    showSlides3(slideIndex3 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide3() {
    showSlides3(slideIndex3 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

/* Основная функция сладера */
function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("item3");
    var dots = document.getElementsByClassName("slider-dots_item3");
    if (n > slides.length) {
      slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active3", "");
    }
    slides[slideIndex3 - 1].style.display = "block";
    dots[slideIndex3 - 1].className += " active3";
}