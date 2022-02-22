
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random - ссылка на функцию
function getRandomIntInclusive(min, max) {

  if ((min >= 0 && max > 0) && (min < max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log('Значение min не может быть больше max или меньше нуля');
}


function getRandomLocationPoint(min, max, sign) {

  if ((min >= 0 && max > 0) && (min < max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min)+Number(Math.random().toFixed(sign));
  }
}


