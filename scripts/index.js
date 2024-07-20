// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placeList = document.querySelector(".places__list");

function createCards(item) {
  const cardTemplate = document.querySelector("#card-template").content;
  const placesItem = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = placesItem.querySelector(".card__image");
  const cardTitle = placesItem.querySelector(".card__title");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  placesItem
    .querySelector(".card__delete-button")
    .addEventListener("click", clickRemoveCard);
  return placesItem;
}
initialCards.forEach((item) => {
  // перебор массива
  placeList.append(createCards(item));
});

// Функция для удлаения карточек, слушатель будет при создании карточки
function clickRemoveCard(event) {
  event.target.closest(".places__item").remove();
}
