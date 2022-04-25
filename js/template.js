const cardTemplateElement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const TranslatePlaces = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const featuresConteiner = (element, offersFeatures) => {
  const featuresItem = element.querySelector('.popup__features');
  const featuresListElement = featuresItem.querySelectorAll('.popup__feature');
  const modifiers = offersFeatures.map((offersFeature) => `popup__feature--${offersFeature}`);

  featuresListElement.forEach((featuresListItemElement) => {

    const isNecessary = [...featuresListItemElement.classList].some((itemClass) => modifiers.includes(itemClass));

    if(!isNecessary) {
      featuresListItemElement.remove();
    }
  });
};

/**
 *
 * @param {HTMLElement} element
 * @param {string[]} photos
 */
const createPhotos = (element, photos) => {
  const photosContainer = element.querySelector('.popup__photos');
  const photosItem = photosContainer.querySelector('.popup__photo');
  const photoTemplate = photosItem.cloneNode();

  photosItem.remove();

  photos.forEach((photo) => {
    const photoImgElement = photoTemplate.cloneNode();
    photoImgElement.src = photo;
    photosContainer.append(photoImgElement);
  });
};

/**
 *
 * @param {HTMLElement} cardElement
 * @param {string} selector - класс элемента
 * @param {string} attribute
 * @param {string} value
 * @returns
 */
const updateCardElement = (cardElement, selector, attribute, value) => {
  const element = cardElement.querySelector(selector);

  if (element === null) {
    return;
  }

  if (!value) {
    element.classList.add('.hidden');
    return;
  }

  element[attribute] = value;
};

function similarCard(advert) {
  const cardElement = cardTemplateElement.cloneNode(true);
  updateCardElement(cardElement, '.popup__title', 'textContent', advert.offer.title);
  updateCardElement(cardElement, '.popup__text--address', 'textContent', advert.offer.address);
  updateCardElement(cardElement, '.popup__text--price', 'textContent', `${advert.offer.price} ₽/ночь`);
  updateCardElement(cardElement, '.popup__type', 'textContent', TranslatePlaces[advert.offer.type]);
  updateCardElement(cardElement, '.popup__text--capacity', 'textContent', `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`);
  updateCardElement(cardElement, '.popup__text--time', 'textContent', `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`);
  updateCardElement(cardElement, '.popup__description', 'textContent', advert.offer.description);
  updateCardElement(cardElement, '.popup__avatar', 'src', advert.author);

  createPhotos(cardElement, advert.offer.photos);
  featuresConteiner(cardElement, advert.offer.features);
  return cardElement;
}

export {similarCard};
