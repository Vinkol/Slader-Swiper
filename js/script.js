let swiper = new Swiper('.brands-slider__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

const btnMore = document.querySelector('.expand-btn');
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

function showElementsInit(count) {
  slides.forEach((element, index) => {
    if (index < count) {
      element.classList.add('brands-slider__slide--show');
    }
  });
}

// btnMore.addEventListener('click', () => {
//   areElementsShow ? hideElements() : showElements();
//   btnMore.classList.toggle('shown');
// })

btnMore.addEventListener('click', () => {
  if (btnMore.classList.contains('shown')) {
    hideElements();
  } else {
    showElements();
  }
  btnMore.classList.toggle('shown');
});

function hideElements() {
  slides.forEach((element, index) => {
    if (index >= elementsShow) {
      element.classList.remove('brands-slider__slide--show');
    }
  });
  areElementsShow = false;
  btnMore.textContent = 'Показать все';
}

function showElements() {
  slides.forEach(element => {
    element.classList.add('brands-slider__slide--show');
  });
  areElementsShow = true;
  btnMore.textContent = 'Скрыть все';
}