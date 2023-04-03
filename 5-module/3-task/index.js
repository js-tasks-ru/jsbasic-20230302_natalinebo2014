function initCarousel() {
  // ваш код...
  const carouselInner = document.querySelector(".carousel__inner");
  const carouselSlides = document.querySelectorAll(".carousel__slide");
  const carouselSlide = document.querySelector(".carousel__slide");
  const carouselBtns = document.querySelectorAll(".carousel__arrow");
  const leftBtn = document.querySelector(".carousel__arrow_left");
  const rightBtn = document.querySelector(".carousel__arrow_right");

  let offsetValue = carouselSlide.offsetWidth;
  let currentSlide = 0;

  if (currentSlide === 0) {
    setDisplay(leftBtn, "none"); //leftBtn.style.display = "none";
  }

  function setDisplay(elem, display) {
    elem.style.display = display;
  }

  leftBtn.addEventListener('click', function() {
    currentSlide--;
    let shiftValue = offsetValue * currentSlide;

    carouselInner.style.transform = `translateX(-${shiftValue}px)`;
    carouselBtns.forEach(btn => setDisplay(btn, ''));            //btn.style.display = '');

    if (currentSlide <= 0) {
      setDisplay(this, 'none');   //this.style.display = 'none';
    }
  });


  rightBtn.addEventListener("click", function () {
    currentSlide++;
    let shiftValue = offsetValue * currentSlide;
    carouselInner.style.transform = `translateX(-${shiftValue}px)`;
    carouselBtns.forEach((btn) => setDisplay(btn, ''));      //(btn.style.display = ""));

    if (currentSlide >= carouselSlides.length - 1) {
      setDisplay(this, 'none');   //this.style.display = "none";
    }
  });
}
