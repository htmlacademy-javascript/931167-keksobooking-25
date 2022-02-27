
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random - ссылка на функцию
function getRandomInclusiveInt(from, to) {

  if (typeof from !== 'number' || typeof to !== 'number' || (from < 0 && to < 0))  {
    return null;
  }

  if (from < 0) {
    from = 0;
  }

  if (to < 0) {
    to = 0;
  }

  if (from === to) {
    return to;
  }

  if (from > to) {
    const numberConteiner = from;
    from = to;
    to = numberConteiner;
  }

  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInclusiveInt(1, 3);


function getRandomInclusiveNumber(from, to, precision) {

  if (typeof from !== 'number' || typeof to !== 'number' || typeof precision !== 'number' || (from < 0 && to < 0))  {
    return null;
  }

  if (from < 0) {
    from = 0;
  }

  if (to < 0) {
    to = 0;
  }

  if (from === to) {
    return to;
  }

  if (from > to) {
    const numberConteiner = from;
    from = to;
    to = numberConteiner;
  }

  if (precision < 0) {
    precision *= -1;
  }

  return +((Math.random() * ((to - from) + from)).toFixed(precision));
}

getRandomInclusiveNumber(1, 4, 5);
