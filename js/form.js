const adFormElement = document.querySelector('.ad-form');
const adFormFiltersElements = document.querySelector('.map__filters');

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
