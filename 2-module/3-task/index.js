//'use strict'

let calculator = {
  // ваш код
  read(a, b) {
   this.a = a;
   this.b = b;
   console.log(a, b);
   console.log({ a: this.a, b: this.b });
   return {a: this.a, b: this.b};
  },

  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
