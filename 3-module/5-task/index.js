function getMinMax(str) {
  // ваш код...
  let result = {};
  let arr = str.split(' ').filter((item) => !Number.isNaN(+item)).map(item => +item);

  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  
  return result;
}


