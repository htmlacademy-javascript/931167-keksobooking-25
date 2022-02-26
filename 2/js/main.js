
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random - ссылка на функцию
function getRandomIntInclusive(min, max) {

  if (min > max) {
    const numberConteiner = min;
    min = max;
    max = numberConteiner;
  }

  if (min === max) {
    return max;
  }

  if ((min >= 0 && max > 0) && (min < max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

getRandomIntInclusive(1, 3);


function getRandomLocationPoint(min, max, sign) {

  if (min > max) {
    const numberConteiner = min;
    min = max;
    max = numberConteiner;
  }

  if (min === max) {
    return max;
  }

  if (sign < 0) {
    sign *= -1;
  }

  if ((min >= 0 && max > 0) && (min < max)) {
    return (Math.floor(Math.random() * (max - min)) + min)+Number(Math.random().toFixed(sign));
  }
  return NaN;
}

getRandomLocationPoint(1, 4, 5);
