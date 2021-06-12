export const finishList = () => {
  const baseElement = document.querySelector('ul');
  const listElement = document.createElement('li');
  listElement.textContent = '8';
  baseElement.append(listElement);

  const listElement2 = document.createElement('li');
  listElement2.textContent = '1';
  baseElement.prepend(listElement2);

  const baseElement2 = document.querySelector('.special');
  const listElement3 = document.createElement('li');
  listElement3.textContent = '4';
  baseElement2.before(listElement3);

  const listElement4 = document.createElement('li');
  listElement4.textContent = '6';
  baseElement2.after(listElement4);
};

// finishList();
