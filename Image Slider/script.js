const slide = document.querySelectorAll('.slide');
const div = document.querySelectorAll('.round > div');
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');

let currentInterval = '';

const prevSlide = () => {
  console.log('previous clicked');
  const current = document.querySelector('.current');
  current.classList.remove('current');
  const divSelected = document.querySelector('.selectedDiv');
  divSelected.classList.remove('selectedDiv');

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
    divSelected.previousElementSibling.classList.add('selectedDiv');
  } else {
    slide[slide.length - 1].classList.add('current');
    div[div.length - 1].classList.add('selectedDiv');
  }
};
const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  const divSelected = document.querySelector('.selectedDiv');
  divSelected.classList.remove('selectedDiv');
  if (current.nextElementSibling) {
    console.log(current.nextElementSibling);
    current.nextElementSibling.classList.add('current');
    divSelected.nextElementSibling.classList.add('selectedDiv');
  } else {
    slide[0].classList.add('current');
    div[0].classList.add('selectedDiv');
  }
};

prev.addEventListener('click', () => {
  prevSlide();
  clearInterval(currentInterval);
  change();
});
next.addEventListener('click', () => {
  nextSlide();
  clearInterval(currentInterval);
  change();
});

function change() {
  currentInterval = setInterval(nextSlide, 3000);
}

change();
