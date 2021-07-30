// Блок projects, карточки.

const allCardWrappers = document.querySelectorAll(".projects__card-wrapper");

function openCloseCard(card, cardWrapper) {
  const rigthClosestCard = cardWrapper.children[+card.key + 1];
  const leftClosestCard = cardWrapper.children[+card.key - 1];

  if (card.classList.contains("projects__card_type_scaled")) {
    card.classList.remove("projects__card_type_scaled");
    if (+card.key + 1 === cardWrapper.children.length) {
      leftClosestCard.classList.remove("projects__card_type_covered-right");
    } else {
      rigthClosestCard.classList.remove("projects__card_type_covered-left");
    }
    setTimeout(() => card.classList.remove("projects__card_z-indexed"), 300);

    return;
  }

  document.querySelectorAll(".projects__card").forEach((el) => {
    el.classList.remove(
      "projects__card_type_scaled",
      "projects__card_type_covered-left",
      "projects__card_type_covered-right",
      "projects__card_z-indexed"
    );
  });

  card.classList.add("projects__card_type_scaled", "projects__card_z-indexed");

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
