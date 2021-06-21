export const delay = (time) => {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done');
    }, time);
  });
  return result;
};

delay(3000).then(value => console.log(value));

