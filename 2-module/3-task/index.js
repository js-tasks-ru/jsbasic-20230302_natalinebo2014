//'use strict'

let calculator = {
  // ваш код
  read() {
    this.a = +prompt("Enter a value", 0);
    this.b = +prompt("Enter b value", 0);
  },

  sum() {
    console.log(this.a, this.b);
    console.log(this.a + this.b);
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

//calculator.read();
//console.log(calculator.sum());
//console.log(calculator.mul());
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
