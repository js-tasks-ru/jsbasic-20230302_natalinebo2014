function camelize(str) {
  // ваш код...
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
      console.log(i);
      arr[i + 1] = arr[i + 1][0].toUpperCase();
    }
  }
  return arr.join("").split("-").join("");
}

