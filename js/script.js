let swiper = new Swiper('.brands-slider__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

const BtnMore = document.querySelector('.expand-btn');
const slides = document.querySelectorAll('.brands-slider__slide');
let elementsShow = 0;
let areElementsShow = false;
let width = window.innerWidth;


if (width <= 767) {
  elementsShow = 1000;
  swiper.init();
} else if (width >= 768 && width < 1120) {
  swiper.destroy();
  elementsShow = 6;
} else {
  swiper.destroy();
  elementsShow = 8;
}

showElementsInit(elementsShow);

function showElementsInit(i) {
  slides.forEach(element => {
    if (i > 0) {
      element.classList.add('brands-slider__slide--show');
    }    
    i--;
  });
}

BtnMore.addEventListener('click', () => {
  areElementsShow ? hideElements() : showElements();
  BtnMore.classList.toggle('shown');
})


function hideElements() {
  let counter = 0;
  slides.forEach(element => {
    if (counter >= elementsShow) element.classList.remove('brands-slider__slide--show');
    counter++;
  });
  areElementsShow = false;
  BtnMore.textContent = 'Показать все';
}

function showElements() {
  slides.forEach(element => {
    element.classList.add('brands-slider__slide--show');
  });
  areElementsShow = true;
  BtnMore.textContent = 'Скрыть все';
}