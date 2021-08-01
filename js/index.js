// projects-создание, вставка карточек
function createProjectCard(data) {
  const templateCard = document.querySelector("#template-card").content;
  const clonedCard = templateCard
    .querySelector(".projects__card")
    .cloneNode(true);
  const logo = clonedCard.querySelector(".projects__logo");
  logo.logoKey = data.logoKey;
  logo.classList.add(`projects__logo_company_${logo.logoKey}`);

  clonedCard.querySelector(".projects__card-text").textContent =
    data.description;

  return clonedCard;
}

function createCardWrapper() {
  const templateCardWrapper = document.querySelector(
    "#template-card-wrapper"
  ).content;
  const clonedCardWrapper = templateCardWrapper
    .querySelector(".projects__card-wrapper")
    .cloneNode(true);

  return clonedCardWrapper;
}

const arrCards = projectsCards.map((i) => createProjectCard(i));

function decomposeDataDepByScreenSize() {
  let arrWithActNumCardsArrs = [];
  let arr = [];

  // Решить
  // let numCardsInWrapper = 0;
  // window.innerWidth > 1023 ? (numCardsInWrapper = 4) : null;

  for (let i = 0; i < arrCards.length; i++) {
    if (arr.length !== 4) {
      arr.push(arrCards[i]);
      if (i === arrCards.length - 1) arrWithActNumCardsArrs.push(arr);
    } else {
      arrWithActNumCardsArrs.push(arr);
      arr = [];
      arr.push(arrCards[i]);
    }
  }
  return arrWithActNumCardsArrs;
}

const actNumCards = decomposeDataDepByScreenSize();

const cardWrappers = actNumCards.map((arr) => {
  const wrapper = createCardWrapper();
  arr.forEach((el) => {
    wrapper.append(el);
  });
  return wrapper;
});

cardWrappers.forEach((el) => {
  document.querySelector(".projects__cards").append(el);
});

// projects-открывающиеся карточки
const allCardWrappers = document.querySelectorAll(".projects__card-wrapper");

function openCloseCard(card, cardWrapper) {
  const allCards = document.querySelectorAll(".projects__card");
  const logos = document.querySelectorAll(".projects__logo");
  const btnArrows = document.querySelectorAll(".projects__card-btn");
  const svgPathsBtnArrows = document.querySelectorAll(
    ".projects__svg-path-arrow"
  );
  const cardsTexts = document.querySelectorAll(".projects__card-text");
  const linksMore = document.querySelectorAll(".projects__card-link");

  const rigthClosestCard = cardWrapper.children[+card.key + 1];
  const leftClosestCard = cardWrapper.children[+card.key - 1];

  const currLogo = card.querySelector(".projects__logo");
  const currBtnArrow = card.querySelector(".projects__card-btn");
  const currSvgPathsBtnArrow = card.querySelectorAll(
    ".projects__svg-path-arrow"
  );
  const currCardText = card.querySelector(".projects__card-text");
  const currLinkMore = card.querySelector(".projects__card-link");

  if (card.classList.contains("projects__card_type_opened")) {
    card.classList.remove("projects__card_type_opened");
    currLogo.classList.remove(
      "projects__logo_type_opened",
      `projects__logo_company_${currLogo.logoKey}_theme_dark`
    );
    currBtnArrow.classList.remove("projects__card-btn_opened");
    currSvgPathsBtnArrow.forEach((el) => {
      el.classList.remove("projects__svg-path-arrow_opened");
    });
    currCardText.classList.remove("projects__card-text_opened");
    currLinkMore.classList.remove("projects__card-link_opened");

    if (+card.key + 1 === cardWrapper.children.length) {
      leftClosestCard.classList.remove("projects__card_type_covered-right");
    } else {
      rigthClosestCard.classList.remove("projects__card_type_covered-left");
    }
    setTimeout(() => card.classList.remove("projects__card_z-indexed"), 300);

    return;
  }

  allCards.forEach((el) => {
    el.classList.remove(
      "projects__card_type_opened",
      "projects__card_type_covered-left",
      "projects__card_type_covered-right",
      "projects__card_z-indexed"
    );
  });

  logos.forEach((el) => {
    el.classList.remove(
      "projects__logo_type_opened",
      `projects__logo_company_${el.logoKey}_theme_dark`
    );
  });

  btnArrows.forEach((el) => {
    el.classList.remove("projects__card-btn_opened");
  });

  svgPathsBtnArrows.forEach((el) => {
    el.classList.remove("projects__svg-path-arrow_opened");
  });

  cardsTexts.forEach((el) => {
    el.classList.remove("projects__card-text_opened");
  });

  linksMore.forEach((el) => {
    el.classList.remove("projects__card-link_opened");
  });

  card.classList.add("projects__card_type_opened", "projects__card_z-indexed");
  currLogo.classList.add(
    "projects__logo_type_opened",
    `projects__logo_company_${currLogo.logoKey}_theme_dark`
  );
  currCardText.classList.add("projects__card-text_opened");
  currLinkMore.classList.add("projects__card-link_opened");

  currBtnArrow.classList.add("projects__card-btn_opened");
  currSvgPathsBtnArrow.forEach((el) => {
    el.classList.add("projects__svg-path-arrow_opened");
  });

  if (+card.key + 1 === cardWrapper.children.length) {
    leftClosestCard.classList.add("projects__card_type_covered-right");
  } else {
    rigthClosestCard.classList.add("projects__card_type_covered-left");
  }
}

allCardWrappers.forEach((cardWrapper, index) => {
  const rowCards = cardWrapper.querySelectorAll(".projects__card");
  rowCards.forEach((card, i) => {
    card.key = i + "";
    card.addEventListener("click", () => openCloseCard(card, cardWrapper));
  });
});

// projects-пагинация

const cardList = new List("projects", {
  valuesName: ["projects__card-wrapper"],
  page: 2,
  pagination: [{ right: 1 }],
});

console.log(cardList);
// header
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const menuContainer = document.querySelector("#menu-container");
const headerLogo = document.querySelector("#header-logo");

menuOpenButton.addEventListener("click", function () {
  menuContainer.classList.add("header__menu-container_open");
  menuOpenButton.classList.toggle("header__element-hidden");
  headerLogo.classList.toggle("header__element-hidden");
});

menuCloseButton.addEventListener("click", function () {
  menuContainer.classList.remove("header__menu-container_open");
  menuOpenButton.classList.toggle("header__element-hidden");
  headerLogo.classList.toggle("header__element-hidden");
});

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
