/* Индекс слайда по умолчанию */
var slideIndex4 = 1;
showSlides4(slideIndex4);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide4() {
    showSlides4(slideIndex4 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide4() {
    showSlides4(slideIndex4 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

/* Основная функция сладера */
function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("item4");
    var dots = document.getElementsByClassName("slider-dots_item4");
    if (n > slides.length) {
      slideIndex4 = 1
    }
    if (n < 1) {
        slideIndex4 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active4", "");
    }
    slides[slideIndex4 - 1].style.display = "block";
    dots[slideIndex4 - 1].className += " active4";
}