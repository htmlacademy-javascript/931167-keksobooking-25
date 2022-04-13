const adFormElement = document.querySelector('.ad-form');
const adFormFiltersElements = document.querySelector('.map__filters');
const adPrice = adFormElement.querySelector('#price');
const adType = adFormElement.querySelector('#type');

const  PriceValue = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const inactiveStateForm = () => {
  adFormElement.classList.add('ad-form--disabled');
  adFormElement.children.forEach((item) => {item.disabled = true;});
};

const activeStateForm = () => {
  adFormElement.classList.remove('ad-form--disabled');
  adFormElement.children.forEach((item) => {item.disabled = false;});
};

const inactiveStateFilter = () => {
  adFormFiltersElements.classList.add('map__filters--disabled');
  adFormFiltersElements.children.forEach((item) => {item.disabled = true;});
};

const activeStateFilter = () => {
  adFormFiltersElements.classList.remove('map__filters--disabled');
  adFormFiltersElements.children.forEach((item) => {item.disabled = false;});
};

export {inactiveStateForm, activeStateForm, inactiveStateFilter, activeStateFilter};


const validateAdPrice = (value) => {
  const unit = document.querySelector('#type');
  return value >= PriceValue[unit.value] && value <= 100000;
};

const getAdTypeErrorMessage = () => {
  const unit = document.querySelector('#type');
  return `Минимальная цена за ночь: ${PriceValue[unit.value]}`;
};

const pristine = new Pristine(adFormElement, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(
  adPrice,
  validateAdPrice,
  getAdTypeErrorMessage,
);

const setMinPrice = (type, price) => {
  price.min = PriceValue[type.value];
  price.placeholder =  PriceValue[type.value];
};

const onAdTypeChange = () => {
  setMinPrice(adType, adPrice);
  pristine.validate(adPrice);
};

adType.addEventListener('change', () => {
  onAdTypeChange();
});


// Заблокировать кнопку Отправить на время выполнения запроса к серверу
// const sendButton = document.querySelector('.ad-form__submit');


// sendButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   inactiveStateForm();

// });

// const pristine = new Pristine(adFormElement, {
//   classTo: 'ad-form__validate',
//   errorTextParent: 'ad-form__validate',
//   errorTextClass: 'ad-form__validate-error-text',
// });

const roomsCount = adFormElement.querySelector('[name="rooms"]');
const capacitiesCount = adFormElement.querySelector('[name="capacity"]');
const placesOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

function validateRooms () {
  return placesOption[roomsCount.value].includes(capacitiesCount.value);
}

function getRoomsErrorMessage () {
  if (capacitiesCount.value === '0') {
    return `${''}`;
  }
  return `${'Не поместитесь'}`;
}

function getCapacitiesErrorMessage () {
  if (capacitiesCount.value === '0') {
    return `${'для 100 комнат'}`;
  }
  return `${'Не поместитесь'}`;
}

pristine.addValidator(roomsCount, validateRooms, getRoomsErrorMessage);
pristine.addValidator(capacitiesCount, validateRooms, getCapacitiesErrorMessage);

adFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if(isValid) {
    console.log('Заебись');
  }
  console.log('Хуйня, переделывай');
});


const timeChange = () => {
  const timeIn = adFormElement.querySelector('#timein');
  const timeOut = adFormElement.querySelector('#timeout');

  timeIn.onchange = function(){ timeOut.selectedIndex = this.selectedIndex; };
  timeOut.onchange = function(){ timeIn.selectedIndex = this.selectedIndex; };
};

timeChange();
