export const manageClasses = () => {
  const addSelected = document.querySelector('.one');
  addSelected.classList.add('selected');

  const removeSelected = document.querySelector('.two');
  removeSelected.classList.remove('selected');

  const toggle = document.querySelector('.three');
  toggle.classList.toggle('three_done');

  const anotherClass = document.querySelector('.four');
  if (anotherClass.classList.contains('some-class')) {
    anotherClass.classList.add('another-class');
  };
};

manageClasses();
