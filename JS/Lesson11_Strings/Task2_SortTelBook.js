// Отсортировать телефонную книгу по имени, true - по умолчанию - по возрастанию, false - по убыванию

const sortContacts = (arr, direction = true) => {
  if (!Array.isArray(arr)) return null;
  const result = arr.sort((a, b) => {
    if (direction) return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });
  return result;
};

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-777',
  },
  {
    name: 'John',
    phoneNumber: '757-747',
  },
  {
    name: 'Marry',
    phoneNumber: '877-771',
  },
];

sortContacts(contacts, false);
