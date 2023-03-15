function camelize(str) {
  // ваш код...
  let arr = str
    .split("")
    .map((item, index, array) => {
      if (item === "-") {
        console.log(index);
        array[index + 1] = array[index + 1].toUpperCase();
      }
      return item;
    })
    .join("")
    .split("-")
    .join("");
    console.log(arr);

  return arr;
}



