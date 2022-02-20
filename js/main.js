function getRandomIntInclusive(min, max) {
  if (( min >= max) || (min < 0 || max < 0)){
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(5.7, 9);

function checkLengthString(checkString, maxLength = 140) {
  return checkString.length <= maxLength;
}
checkLengthString('длина строки');
