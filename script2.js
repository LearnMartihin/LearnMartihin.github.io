/* Индекс слайда по умолчанию */
var slideIndex2 = 1;
showSlides2(slideIndex2);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide2() {
    showSlides2(slideIndex2 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide2() {
    showSlides2(slideIndex2 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

/* Основная функция сладера */
function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("item2");
    var dots = document.getElementsByClassName("slider-dots_item2");
    if (n > slides.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active2";
}