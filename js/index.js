// Карусель
const prevBtn = document.querySelector(".carousel__btn_type_prev");
const nextBtn = document.querySelector(".carousel__btn_type_next");
const carousel = document.querySelector(".carousel__cards-box");
const dotsBox = document.querySelector(".carousel__dots");
const dots = dotsBox.querySelectorAll(".carousel__dot");

function switchCarouselSlide(slides) {
  dots.forEach((el) => el.classList.remove("carousel__dot_active"));
  if (
    carousel.classList.contains(
      `carousel__cards-box_slide_${slides.a.nameSlide}`
    )
  ) {
    carousel.classList.remove(
      `carousel__cards-box_slide_${slides.a.nameSlide}`
    );
    carousel.classList.add(`carousel__cards-box_slide_${slides.b.nameSlide}`);
    dots[slides.b.numDot - 1].classList.add("carousel__dot_active");
  } else if (
    carousel.classList.contains(
      `carousel__cards-box_slide_${slides.b.nameSlide}`
    )
  ) {
    carousel.classList.remove(
      `carousel__cards-box_slide_${slides.b.nameSlide}`
    );
    carousel.classList.add(`carousel__cards-box_slide_${slides.c.nameSlide}`);
    dots[slides.c.numDot - 1].classList.add("carousel__dot_active");
  } else if (
    carousel.classList.contains(
      `carousel__cards-box_slide_${slides.c.nameSlide}`
    )
  ) {
    carousel.classList.remove(
      `carousel__cards-box_slide_${slides.c.nameSlide}`
    );
    carousel.classList.add(`carousel__cards-box_slide_${slides.d.nameSlide}`);
    dots[slides.d.numDot - 1].classList.add("carousel__dot_active");
  } else {
    dots[slides.d.numDot - 1].classList.add("carousel__dot_active");
    return;
  }
}

function switchSlideByDot(dotIndex, carouselEl, dotEl) {
  carouselEl.className = "";
  dots.forEach((el) => el.classList.remove("carousel__dot_active"));
  dotEl.classList.add("carousel__dot_active");
  switch (dotIndex) {
    case 1:
      carouselEl.classList.add(
        "carousel__cards-box",
        "carousel__cards-box_slide_first"
      );
      break;
    case 2:
      carouselEl.classList.add(
        "carousel__cards-box",
        "carousel__cards-box_slide_second"
      );
      break;
    case 3:
      carouselEl.classList.add(
        "carousel__cards-box",
        "carousel__cards-box_slide_third"
      );
      break;
    case 4:
      carouselEl.classList.add(
        "carousel__cards-box",
        "carousel__cards-box_slide_fourth"
      );
      break;
    default:
      carouselEl.classList.add("carousel__cards-box");
      break;
  }
}

nextBtn.addEventListener("click", () => {
  switchCarouselSlide({
    a: { nameSlide: "first", numDot: 1 },
    b: { nameSlide: "second", numDot: 2 },
    c: { nameSlide: "third", numDot: 3 },
    d: { nameSlide: "fourth", numDot: 4 },
  });
});

prevBtn.addEventListener("click", () => {
  switchCarouselSlide({
    a: { nameSlide: "fourth", numDot: 4 },
    b: { nameSlide: "third", numDot: 3 },
    c: { nameSlide: "second", numDot: 2 },
    d: { nameSlide: "first", numDot: 1 },
  });
});

dots.forEach((el, i) => {
  el.addEventListener("click", () => {
    switchSlideByDot(i + 1, carousel, el);
  });
});

// Блок projects, карточки
