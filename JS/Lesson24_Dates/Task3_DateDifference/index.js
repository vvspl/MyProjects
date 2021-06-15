export const getDiff = (startDate, endDate) => {
  let diff = Math.abs(new Date(startDate) - new Date(endDate));
  console.log(diff);

  const days = Math.trunc(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;
  const hours = Math.trunc(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.trunc(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;
  const seconds = Math.trunc(diff / 1000);
  return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
};

const start = new Date(2017, 11, 30, 4, 54, 547);
const end = new Date(2014, 5, 19, 7, 49, 373);
console.log(getDiff(start, end));
