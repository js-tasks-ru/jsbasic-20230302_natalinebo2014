import createElement from "../../assets/lib/create-element.js";

let currentSlide = 0;

const leftBtn = document.querySelector("carousel__arrow_left");
if (leftBtn) {
  setDisplay(leftBtn, "none");
}

export default class Carousel {
  elem = null;

  constructor(slides, slide) {
    this.slides = slides;
    this.slide = slide;
    this.elem = this.#render();
  }

  #onBtnClick = (event, slide) => {
    const carouselInner = document.querySelector(".carousel__inner");
    const carouselSlides = document.querySelectorAll(".carousel__slide");
    const carouselBtns = document.querySelectorAll(".carousel__arrow");
    console.log(carouselInner.style.transform);
    let offsetValue = this.elem.offsetWidth;
    const leftBtn = event.target.closest(".carousel__arrow_left");
    const rightBtn = event.target.closest(".carousel__arrow_right");

    if (leftBtn) {
      currentSlide--;
      let shiftValue = offsetValue * currentSlide;

      carouselInner.style.transform = `translateX(-${shiftValue}px)`;
      console.log(carouselInner.style.transform);
      carouselBtns.forEach((btn) => setDisplay(btn, ""));

      if (currentSlide <= 0) {
        setDisplay(leftBtn, "none");
      }
    }

    if (rightBtn) {
      currentSlide++;
      let shiftValue = offsetValue * currentSlide;
      carouselInner.style.transform = `translateX(-${shiftValue}px)`;
      console.log(carouselInner.style.transform);
      carouselBtns.forEach((btn) => setDisplay(btn, ""));

      if (currentSlide >= carouselSlides.length - 1) {
        setDisplay(rightBtn, "none");
      }
    }

    if (event.target.closest(".carousel__button")) {
      console.log(this.slides[currentSlide].id);
      const statusEvent = new CustomEvent("product-add", {
        detail: this.slides[currentSlide].id,
        bubbles: true,
      });

      event.target.dispatchEvent(statusEvent);
    }
  };

  #render() {
    const elem = createElement(
      `<div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${this.slides
            .map(
              (slide) => `
            <div class="carousel__slide" data-id="${slide.id}">
              <img src="../../assets/images/carousel/${
                slide.image
              }" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>
            `
            )
            .join("")}
        </div>
      </div>
    `
    );

    elem.addEventListener("click", this.#onBtnClick);

    return elem;
  }
}

function setDisplay(item, display) {
  item.style.display = display;
}
