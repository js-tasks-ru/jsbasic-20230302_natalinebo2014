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

    elem.innerHTML = `
      <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
         ${this.rows.map(
           (row) => `
              <tr>
                <td>${row.name}</td>
                <td>${row.age}</td>
                <td>${row.salary}</td>
                <td>${row.city}</td>
                <td><button class="delete-btn">X</button></td>
              </tr>
         `
         )}
    </tbody>
`;

    elem.addEventListener('click', (event) => {
      console.log(event.target)
      if (event.target.classList.contains('delete-btn')) {
        event.target.closest("tr").remove();
      }
    });

    return elem;
    
  }
}









