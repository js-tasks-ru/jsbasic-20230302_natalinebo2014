function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}

//__________________
for (let i = 0; i < 5; i++) {
  console.log(i)
}
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
