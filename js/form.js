const  priceValue = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const placesOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const advertFormElement = document.querySelector('.ad-form');
const mapFilterFormElement = document.querySelector('.map__filters');
const advertPriceSelectElement = advertFormElement.querySelector('#price');
const advertHabitationTypeSelectElement = advertFormElement.querySelector('#type');
const roomsCount = advertFormElement.querySelector('[name="rooms"]');
const capacitiesCount = advertFormElement.querySelector('[name="capacity"]');
const timeInSelectElement = advertFormElement.querySelector('#timein');
const timeOutSelectElement = advertFormElement.querySelector('#timeout');
const advertFormFieldsElements = advertFormElement.querySelectorAll('input, select, textarea');
const mapFilterFieldsElements = advertFormElement.querySelectorAll('input, select');

const disableAdvertForm = () => {
  advertFormElement.classList.add('ad-form--disabled');
  advertFormFieldsElements.forEach((item) => {item.disabled = true;});
};

const enableAdvertForm = () => {
  advertFormElement.classList.remove('ad-form--disabled');
  advertFormFieldsElements.forEach((item) => {item.disabled = false;});
};

const disableFilterForm = () => {
  mapFilterFormElement.classList.add('map__filters--disabled');
  mapFilterFieldsElements.forEach((item) => {item.disabled = true;});
};

const enableFilterForm = () => {
  mapFilterFormElement.classList.remove('map__filters--disabled');
  mapFilterFieldsElements.forEach((item) => {item.disabled = false;});
};

const validateAdPrice = (value) => {
  const unit = document.querySelector('#type');
  return value >= priceValue[unit.value] && value <= 100000;
};

const getAdTypeErrorMessage = () => {
  const unit = document.querySelector('#type');
  return `Минимальная цена за ночь: ${priceValue[unit.value]}`;
};

const pristine = new Pristine(advertFormElement, {
  classTo: 'ad-form__element',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
}, false);

pristine.addValidator(
  advertPriceSelectElement,
  validateAdPrice,
  getAdTypeErrorMessage,
);

const onAdTypeChange = () => {
  advertPriceSelectElement.min = priceValue[advertHabitationTypeSelectElement.value];
  advertPriceSelectElement.placeholder = priceValue[advertHabitationTypeSelectElement.value];
  pristine.validate(advertPriceSelectElement);
};

advertHabitationTypeSelectElement.addEventListener('change', () => {
  onAdTypeChange();
});

const validateRooms = () => placesOption[roomsCount.value].includes(capacitiesCount.value);

const getRoomsErrorMessage = () => {
  if (capacitiesCount.value === '0') {
    return `${''}`;
  }
  return `${'Не поместитесь'}`;
};

const getCapacitiesErrorMessage = () => {
  if (capacitiesCount.value === '0') {
    return `${'для 100 комнат'}`;
  }
  return `${'Не поместитесь'}`;
};

pristine.addValidator(roomsCount, validateRooms, getRoomsErrorMessage);
pristine.addValidator(capacitiesCount, validateRooms, getCapacitiesErrorMessage);

advertFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if(isValid) {
    console.log('Заебись');
    advertFormElement.submit();
    return;
  }
  console.log('Хуйня, переделывай');
});

timeInSelectElement.addEventListener('change', (evt) => {timeOutSelectElement.selectedIndex = evt.target.selectedIndex;});
timeOutSelectElement.addEventListener('change', (evt) => {timeInSelectElement.selectedIndex = evt.target.selectedIndex;});

export {disableAdvertForm, enableAdvertForm, disableFilterForm, enableFilterForm};   
