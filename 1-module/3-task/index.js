function ucFirst(str) {
  // ваш код...
  if (str[0]) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str;
}
