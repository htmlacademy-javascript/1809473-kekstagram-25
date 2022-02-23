function getRandomInt(min, max) {
  if (min >= max) {
    return null;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 5);

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

checkStringLength('Кекстаграм для котиков', 15);
