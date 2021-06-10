const tasks = [
//   { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
//   { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
  const baseEl = document.querySelector('.list'); // находим родительский эл-т

  const newListOfEl = listItems.map(({text}, done ) => { // перебираем объект с текстом для новых эл-тов

    const newEl = document.createElement('li'); // создаем элемент
    const newCheckBx = document.createElement('input'); // создаем чекбокс
    newCheckBx.setAttribute('type', 'checkbox');
    newCheckBx.checked = done;
    newCheckBx.classList.add('list__item-checkbox'); // класс для чекбокса
    if (newCheckBx.checked === done) newEl.classList.add('list__item-done')  // если checked - добавляем другой класс
    else newEl.classList.add('list__item'); // добавляем класс для нового элемента
    newEl.append(newCheckBx, text);      // добавляем текст в элемент

    return newEl; // новая строка добавлена в массив
  });

  baseEl.append(...newListOfEl); // добавляем к начальному элементу массив новых эл-тов
};

renderListItems(tasks);
