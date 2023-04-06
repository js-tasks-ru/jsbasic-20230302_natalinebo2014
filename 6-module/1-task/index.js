/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  elem = null;

  constructor(rows) {
    this.rows = rows;
    this.elem = this.#render();
  }
  #render() {
    const elem = document.createElement("table");
    const thead = document.createElement("thead");
    console.log(this.rows[0]);
    const keysArr = Object.keys(this.rows[0]);
    keysArr.push("");
    console.log(keysArr);
    keysArr.forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      thead.append(th);
    });

    const tbody = document.createElement("tbody");
    console.log(Object.values(this.rows[0]));
    this.rows.forEach((row) => {
      console.log("row " + row);
      const tRow = document.createElement("tr");
      const ceilsData = Object.values(row);
      console.log(ceilsData);
      ceilsData.forEach((ceil) => {
        const td = document.createElement("td");
        td.textContent = ceil;
        tRow.append(td);
      });
      const td = document.createElement("td");
      const closeBtn = document.createElement("button");
      closeBtn.textContent = "X";
      closeBtn.addEventListener("click", function (event) {
        event.currentTarget.closest("tr").remove();
      });
      td.append(closeBtn);
      tRow.append(td);
      tbody.append(tRow);
    });

    elem.append(thead, tbody);

    return elem;
  }
}









