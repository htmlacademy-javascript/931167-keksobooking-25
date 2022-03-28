import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement} from './util.js';

const OFFERS_COUNT = 10;
const OFFER_TITLES = ['Купи сейчас и получай тур в подарок', 'Попробуй наше предложение','Не упусти свой шанс'];
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_CHECKINS = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUTS = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_DESCRIPTIONS = ['Просторная', 'Для студентов', 'Умный дом', 'С детьми и детьми собак'];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const makeLocation = () => ({
  lat: getRandomPositiveFloat(35.65, 35.7, 5),
  lng: getRandomPositiveFloat(139.7, 139.8, 5)
});

const makeOffers = (count) => {
  const conteiner = [];
  for (let i = 1; i <= count; i++) {
    conteiner.push({
      title: getRandomArrayElement(OFFER_TITLES),
      address: makeLocation(),
      price: getRandomPositiveInteger(0, 100),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomPositiveInteger(0, 10),
      guests: getRandomPositiveInteger(0, 10),
      checkin: getRandomArrayElement(OFFER_CHECKINS),
      checkout: getRandomArrayElement(OFFER_CHECKOUTS),
      features: getRandomArrayElement(OFFER_FEATURES),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getRandomArrayElement(OFFER_PHOTOS)
    });
  }
  return conteiner;
};

const makeAuthor = () => {
  let numberAvatar = getRandomPositiveInteger(1, 10);
  if (numberAvatar < 10) {
    numberAvatar = `0${numberAvatar}`;
  }
  return `img/avatars/user${numberAvatar}.png`;
};

export {makeOffers, makeAuthor};

