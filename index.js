console.log("Hi boody");

const prevBtn = document.querySelector(".carousel__btn_type_prev");
const nextBtn = document.querySelector(".carousel__btn_type_next");
const carousel = document.querySelector(".carousel__cards-box");

function carouselBtnListener(slides) {
  if (carousel.classList.contains(`carousel__cards-box_slide_${slides.a}`)) {
    carousel.classList.remove(`carousel__cards-box_slide_${slides.a}`);
    carousel.classList.add(`carousel__cards-box_slide_${slides.b}`);
  } else if (
    carousel.classList.contains(`carousel__cards-box_slide_${slides.b}`)
  ) {
    carousel.classList.remove(`carousel__cards-box_slide_${slides.b}`);
    carousel.classList.add(`carousel__cards-box_slide_${slides.c}`);
  } else if (
    carousel.classList.contains(`carousel__cards-box_slide_${slides.c}`)
  ) {
    carousel.classList.remove(`carousel__cards-box_slide_${slides.c}`);
    carousel.classList.add(`carousel__cards-box_slide_${slides.d}`);
  } else return;
}

nextBtn.addEventListener("click", () => {
  carouselBtnListener({ a: "first", b: "second", c: "third", d: "fourth" });
});

prevBtn.addEventListener("click", () => {
  carouselBtnListener({ a: "fourth", b: "third", c: "second", d: "first" });
});
