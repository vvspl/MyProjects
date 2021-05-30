const countOccurrences = (str = '', find) => {
  if (typeof find !== 'string') return null;
  if (find === '') return null;
  let count = 0;
  let newStr = str;
  while (true) {
    const index = newStr.indexOf(find);
    if (index === -1) return count;
    count += 1;
    newStr = newStr.substr(index + find.length);
  }
};

countOccurrences('qwertydgfderty seserty', 'rty');
