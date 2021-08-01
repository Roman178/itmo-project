// Карусель intro
const intro = document.querySelector(".intro");

const prevBtn = intro.querySelector(".carousel__btn_type_prev");
const nextBtn = intro.querySelector(".carousel__btn_type_next");
const carousel = intro.querySelector(".carousel__cards-box");
const dotsBox = intro.querySelector(".carousel__dots");
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

// Карусель team (must fix)
const teamSection = document.querySelector(".team");

const prevBtnTeam = teamSection.querySelector(".carousel__btn_type_prev");
const nextBtnTeam = teamSection.querySelector(".carousel__btn_type_next");
const carouselTeam = teamSection.querySelector(".carousel__cards-box");
const dotsBoxTeam = teamSection.querySelector(".carousel__dots");
const dotsTeam = dotsBoxTeam.querySelectorAll(".carousel__dot");

function switchCarouselSlideTeam(slides) {
  dotsTeam.forEach((el) => el.classList.remove("carousel__dot_active"));
  if (
    carouselTeam.classList.contains(
      `carousel__cards-box_slide_${slides.a.nameSlide}`
    )
  ) {
    carouselTeam.classList.remove(
      `carousel__cards-box_slide_${slides.a.nameSlide}`
    );
    carouselTeam.classList.add(
      `carousel__cards-box_slide_${slides.b.nameSlide}`
    );
    dotsTeam[slides.b.numDot - 1].classList.add("carousel__dot_active");
  } else {
    dotsTeam[slides.b.numDot - 1].classList.add("carousel__dot_active");
    return;
  }
}

function switchSlideByDotTeam(dotIndex, carouselEl, dotEl) {
  carouselEl.className = "";
  dotsTeam.forEach((el) => el.classList.remove("carousel__dot_active"));
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
    default:
      carouselEl.classList.add("carousel__cards-box");
      break;
  }
}

nextBtnTeam.addEventListener("click", () => {
  switchCarouselSlideTeam({
    a: { nameSlide: "first", numDot: 1 },
    b: { nameSlide: "second", numDot: 2 },
  });
});

prevBtnTeam.addEventListener("click", () => {
  switchCarouselSlideTeam({
    a: { nameSlide: "second", numDot: 2 },
    b: { nameSlide: "first", numDot: 1 },
  });
});

dotsTeam.forEach((el, i) => {
  el.addEventListener("click", () => {
    switchSlideByDotTeam(i + 1, carouselTeam, el);
  });
});
