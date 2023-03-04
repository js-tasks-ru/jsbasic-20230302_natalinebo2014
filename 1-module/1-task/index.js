function factorial(n) {
  // ваш код...
  let result = 1;
  if (n === 0) result = 1;
  else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  }
  return result;
}
