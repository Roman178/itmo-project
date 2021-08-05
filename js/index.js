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

function decomposeDataDepByScreenSize(arrNodesElsCards) {
  let arrWithActNumCardsArrs = [];
  let arr = [];

  const screenSize =
    document.body.scrollWidth > 1201
      ? 4
      : document.body.scrollWidth > 751
      ? 3
      : 2;

  for (let i = 0; i < arrNodesElsCards.length; i++) {
    if (arr.length !== screenSize) {
      arr.push(arrNodesElsCards[i]);
      if (i === arrNodesElsCards.length - 1) arrWithActNumCardsArrs.push(arr);
    } else {
      arrWithActNumCardsArrs.push(arr);
      arr = [];
      arr.push(arrNodesElsCards[i]);
    }
  }
  return arrWithActNumCardsArrs;
}

function pasteCardsInDoc(actualArrOfCards) {
  const actNumCards = decomposeDataDepByScreenSize(actualArrOfCards);

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

  cardWrappers.forEach((cardWrapper, index) => {
    const rowCards = cardWrapper.querySelectorAll(".projects__card");
    rowCards.forEach((card, i) => {
      card.key = i + "";
      card.addEventListener("click", () => openCloseCard(card, cardWrapper));
    });
  });
}

function clearCards() {
  document.querySelectorAll(".projects__card-wrapper").forEach((el) => {
    el.remove();
  });
}

const arrCards = projectsCards.map((i) => createProjectCard(i));
pasteCardsInDoc(arrCards);

function filterCards(tab) {
  document.querySelectorAll(".projects__ctgr-item").forEach((el) => {
    el.classList.remove("projects__ctgr-item_active");
  });

  tab.classList.add("projects__ctgr-item_active");

  const filteredCards = projectsCards
    .filter((j) => j.category === tab.id)
    .map((i) => createProjectCard(i));

  clearCards();
  if (tab.id === "all-projects") {
    document.location.reload();
  } else {
    pasteCardsInDoc(filteredCards);
  }

  pastePagination();
}

const allProjectsTab = document.querySelector("#all-projects");
const govProjectsTab = document.querySelector("#government");
const specialProjectsTab = document.querySelector("#special");
const indevProjectsTab = document.querySelector("#indev");

govProjectsTab.addEventListener("click", () => {
  filterCards(govProjectsTab);
});

allProjectsTab.addEventListener("click", () => {
  filterCards(allProjectsTab);
});

specialProjectsTab.addEventListener("click", () => {
  filterCards(specialProjectsTab);
});

indevProjectsTab.addEventListener("click", () => {
  filterCards(indevProjectsTab);
});

// projects-пагинация. Плагин List.js.

function pastePagination() {
  const cardList = new List("projects", {
    valuesName: ["projects__card-wrapper"],
    page: 2,
    pagination: [
      {
        right: 1,
      },
    ],
  });

  cardList.on("updated", (e) => {
    const anchorProjects = document.querySelector(
      '.header__link[href*="projects"]'
    );
    setTimeout(() => anchorProjects.click());
  });
}

pastePagination();

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

// Карусель intro

const introCarousel = document.querySelector(".intro__carousel");
const introSlidesBox = introCarousel.querySelector(".glide__slides");
const introCard = document
  .querySelector("#middle-carousel-card")
  .content.querySelector(".middle-carousel__card");
const introSlide = document.createElement("li");
introSlide.classList.add("glide__slide", "middle-carousel__slide");

function appendCardsInSlide(numCards, slide, card) {
  for (let i = 0; i < numCards; i++) {
    slide.append(card.cloneNode(true));
  }
}

function appendSlidesInCarousel(numSlides, slidesBox, slide, carousel) {
  for (let j = 0; j < numSlides; j++) {
    slidesBox.append(slide.cloneNode(true));
    const bullet = document.createElement("button");
    bullet.dataset.glideDir = "=" + j;
    bullet.classList.add("glide__bullet");
    carousel.querySelector(".glide__bullets").append(bullet);
  }
}

function clearLastSlide(slidesBox, cardSelector, data) {
  const startingLengthOfCards = slidesBox.querySelectorAll(cardSelector).length;

  for (let k = data.length; k < startingLengthOfCards; k++) {
    slidesBox
      .querySelector(`.glide__slide:last-of-type ${cardSelector}:last-of-type`)
      .remove();
  }
}

appendCardsInSlide(3, introSlide, introCard);
appendSlidesInCarousel(4, introSlidesBox, introSlide, introCarousel);
clearLastSlide(introSlidesBox, ".middle-carousel__card", introData);

const appendedCards = introCarousel.querySelectorAll(".middle-carousel__card");

appendedCards.forEach((card, i) => {
  card.querySelector(".middle-carousel__card-date").textContent =
    introData[i].date;
  card.querySelector(".middle-carousel__card-title").textContent =
    introData[i].title;
  card.querySelector(".middle-carousel__card-text").textContent =
    introData[i].text;
});

new Glide(".intro__carousel .middle-carousel__wrapper").mount();

// Карусель Публикации 2.0

const publCarousel = document.querySelector(".publications__carousel");
const publSlidesBox = publCarousel.querySelector(".glide__slides");
const publCard = document
  .querySelector("#large-carousel-card")
  .content.querySelector(".large-carousel__card");
const publSlide = document.createElement("li");
publSlide.classList.add("glide__slide", "large-carousel__slide");

appendCardsInSlide(6, publSlide, publCard);
appendSlidesInCarousel(
  Math.ceil(publicationCards.length / 6),
  publSlidesBox,
  publSlide,
  publCarousel
);
clearLastSlide(publSlidesBox, ".large-carousel__card", publicationCards);

publCarousel
  .querySelectorAll(".publications__card-share-button")
  .forEach((el) => {
    el.addEventListener("click", function () {
      el.closest(".publications__card-nav-block")
        .querySelector(".publications__card-share-popup")
        .classList.toggle("publications__card-share-popup_open");
    });
  });

new Glide(".publications__carousel .large-carousel__wrapper").mount();

// const intro = document.querySelector(".intro");

// const prevBtn = intro.querySelector(".carousel__btn_type_prev");
// const nextBtn = intro.querySelector(".carousel__btn_type_next");
// const carousel = intro.querySelector(".carousel__cards-box");
// const dotsBox = intro.querySelector(".carousel__dots");

// const dots = dotsBox.querySelectorAll(".carousel__dot");

// function switchCarouselSlide(slides) {
//   dots.forEach((el) => el.classList.remove("carousel__dot_active"));
//   if (
//     carousel.classList.contains(
//       `carousel__cards-box_slide_${slides.a.nameSlide}`
//     )
//   ) {
//     carousel.classList.remove(
//       `carousel__cards-box_slide_${slides.a.nameSlide}`
//     );
//     carousel.classList.add(`carousel__cards-box_slide_${slides.b.nameSlide}`);
//     dots[slides.b.numDot - 1].classList.add("carousel__dot_active");
//   } else if (
//     carousel.classList.contains(
//       `carousel__cards-box_slide_${slides.b.nameSlide}`
//     )
//   ) {
//     carousel.classList.remove(
//       `carousel__cards-box_slide_${slides.b.nameSlide}`
//     );

//     carousel.classList.add(`carousel__cards-box_slide_${slides.c.nameSlide}`);
//     dots[slides.c.numDot - 1].classList.add("carousel__dot_active");
//   } else if (
//     carousel.classList.contains(
//       `carousel__cards-box_slide_${slides.c.nameSlide}`
//     )
//   ) {
//     carousel.classList.remove(
//       `carousel__cards-box_slide_${slides.c.nameSlide}`
//     );
//     carousel.classList.add(`carousel__cards-box_slide_${slides.d.nameSlide}`);
//     dots[slides.d.numDot - 1].classList.add("carousel__dot_active");
//   } else {
//     dots[slides.d.numDot - 1].classList.add("carousel__dot_active");
//     return;
//   }
// }

// function switchSlideByDot(dotIndex, carouselEl, dotEl) {
//   carouselEl.className = "";
//   dots.forEach((el) => el.classList.remove("carousel__dot_active"));
//   dotEl.classList.add("carousel__dot_active");
//   switch (dotIndex) {
//     case 1:
//       carouselEl.classList.add(
//         "carousel__cards-box",
//         "carousel__cards-box_slide_first"
//       );
//       break;
//     case 2:
//       carouselEl.classList.add(
//         "carousel__cards-box",
//         "carousel__cards-box_slide_second"
//       );
//       break;
//     case 3:
//       carouselEl.classList.add(
//         "carousel__cards-box",
//         "carousel__cards-box_slide_third"
//       );
//       break;
//     case 4:
//       carouselEl.classList.add(
//         "carousel__cards-box",
//         "carousel__cards-box_slide_fourth"
//       );
//       break;
//     default:
//       carouselEl.classList.add("carousel__cards-box");
//       break;
//   }
// }

// nextBtn.addEventListener("click", () => {
//   switchCarouselSlide({
//     a: { nameSlide: "first", numDot: 1 },
//     b: { nameSlide: "second", numDot: 2 },
//     c: { nameSlide: "third", numDot: 3 },
//     d: { nameSlide: "fourth", numDot: 4 },
//   });
// });

// prevBtn.addEventListener("click", () => {
//   switchCarouselSlide({
//     a: { nameSlide: "fourth", numDot: 4 },
//     b: { nameSlide: "third", numDot: 3 },
//     c: { nameSlide: "second", numDot: 2 },
//     d: { nameSlide: "first", numDot: 1 },
//   });
// });

// dots.forEach((el, i) => {
//   el.addEventListener("click", () => {
//     switchSlideByDot(i + 1, carousel, el);
//   });
// });

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

// Создание карточки для блока Публикации

function addPublicationsCard(item) {
  const publicationsCardTemplate = document.querySelector(
    "#publications-card-template"
  ).content;
  const newPublicationsCard = publicationsCardTemplate
    .querySelector(".publications__card")
    .cloneNode(true);

  newPublicationsCard.querySelector(".publications__card-image").src =
    item.image;
  newPublicationsCard.querySelector(".publications__card-title").textContent =
    item.title;
  newPublicationsCard.querySelector(".publications__card-authors").textContent =
    item.authors;
  newPublicationsCard.querySelector(".publications__card-article").textContent =
    item.article;

  newPublicationsCard
    .querySelector(".publications__card-share-button")
    .addEventListener("click", function () {
      newPublicationsCard
        .querySelector(".publications__card-share-popup")
        .classList.toggle("publications__card-share-popup_open");
    });
  return newPublicationsCard;
}

publicationCards.forEach(function (item) {
  document
    .querySelector("#publications-cards-box")
    .append(addPublicationsCard(item));
});

// Создание точек

const publCards = document.querySelectorAll(".publications__card");
const publCardsArray = Array.from(publCards);
const publCardsNumberUp = Math.ceil(publCards.length / 3);

for (let i = 1; i <= publCardsNumberUp; i++) {
  document
    .querySelector("#publications-dots")
    .append(
      document.querySelector("#publications-dot").content.cloneNode(true)
    );
}

// / Карусель publications

const publBtnNext = document.querySelector("#publications-carousel-next-btn");
const publBtnPrev = document.querySelector("#publications-carousel-prev-btn");
const publDots = document.querySelectorAll(".carousel__dot_publications");

// for (let i = 3; i < publCards.length; i++) {
//   publCards[i].classList.add('publications__card_hidden');
// }

publDots[0].classList.add("carousel__dot_active");

let i = 0;

publBtnNext.addEventListener("click", moveLeft);
function moveLeft() {
  for (let i = 0; i < publCards.length; i++) {
    publCards[i].classList.add("publications__card_hidden");
  }
  publCards[i].classList.add("publications__card_hidden");
  publCards[i + 1].classList.add("publications__card_hidden");
  publCards[i + 2].classList.add("publications__card_hidden");
  publCards[i + 3].classList.remove("publications__card_hidden");
  publCards[i + 4].classList.remove("publications__card_hidden");
  publCards[i + 5].classList.remove("publications__card_hidden");
  i = i + 3;
  publDots.forEach(function (item, index) {
    if (!publCards[3 * index].classList.contains("publications__card_hidden")) {
      publDots[index].classList.add("carousel__dot_active");
    } else {
      publDots[index].classList.remove("carousel__dot_active");
    }
  });
}

publBtnPrev.addEventListener("click", moveRight);
function moveRight() {
  for (let i = 0; i < publCards.length; i++) {
    publCards[i].classList.add("publications__card_hidden");
  }
  publCards[i - 1].classList.remove("publications__card_hidden");
  publCards[i - 2].classList.remove("publications__card_hidden");
  publCards[i - 3].classList.remove("publications__card_hidden");
  publCards[i].classList.add("publications__card_hidden");
  publCards[i + 1].classList.add("publications__card_hidden");
  publCards[i + 2].classList.add("publications__card_hidden");
  i = i - 3;
  publDots.forEach(function (item, index) {
    if (!publCards[3 * index].classList.contains("publications__card_hidden")) {
      publDots[index].classList.add("carousel__dot_active");
    } else {
      publDots[index].classList.remove("carousel__dot_active");
    }
  });
}

publDots.forEach(function (item, index, array) {
  publDots[index].addEventListener("click", function () {
    publCards.forEach(function (card) {
      card.classList.add("publications__card_hidden");
    });
    publCards[index * 3].classList.remove("publications__card_hidden");
    publCards[index * 3 + 1].classList.remove("publications__card_hidden");
    publCards[index * 3 + 2].classList.remove("publications__card_hidden");
    array.forEach(function (dot) {
      dot.classList.remove("carousel__dot_active");
    });
    array[index].classList.add("carousel__dot_active");
  });
});

// study
const studyButtonActive = document.querySelector(".study__tab-bar_btn_active");
const studyButtonAspirant = document.querySelector(
  ".study__tab-bar_btn_aspirant"
);
const studyButtonMagistr = document.querySelector(
  ".study__tab-bar_btn_magistr"
);
const studyCardImage = document.querySelector(".study-card__img");
//
studyButtonAspirant.addEventListener("click", () => {
  studyButtonAspirant.classList.toggle("study__tab-bar_btn_active");
  studyButtonMagistr.classList.remove("study__tab-bar_btn_active");
  studyCardImage.src = "./images/Study/Aspirant.png";
});
studyButtonMagistr.addEventListener("click", () => {
  studyButtonAspirant.classList.remove("study__tab-bar_btn_active");
  studyButtonMagistr.classList.toggle("study__tab-bar_btn_active");
  studyCardImage.src = "./images/Study/Magistr.png";
});
