const tasks = [
//   { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
//   { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
  const baseEl = document.querySelector('.list'); // находим родительский эл-т

  const newListOfEl = listItems.map((obj) => { // перебираем объект с текстом для новых эл-тов

    const newEl = document.createElement('li'); // создаем элемент
    const newCheckBx = document.createElement('input'); // создаем чекбокс
    newCheckBx.setAttribute('type', 'checkbox');
    newEl.classList.add('list__item'); // добавляем класс для нового элемента
    newCheckBx.classList.add('list__item-checkbox'); // класс для чекбокса
    newEl.append(newCheckBx, obj.text);      // добавляем текст в элемент

    return newEl; // новая строка добавлена в массив
  });

  baseEl.append(...newListOfEl); // добавляем к начальному элементу массив новых эл-тов
};

renderListItems(tasks);
