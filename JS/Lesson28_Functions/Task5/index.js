export const shmoment = (date) => {
  let newDate = date;
  const addDate = (dat, value) => {
    if (dat === 'years')
      newDate = new Date(new Date(newDate).setFullYear(new Date(newDate).getFullYear() + value));
    else if (dat === 'months')
      newDate = new Date(new Date(newDate).setMonth(new Date(newDate).getMonth() + value));
    else if (dat === 'days')
      newDate = new Date(new Date(newDate).setDate(new Date(newDate).getDate() + value));
    else if (dat === 'hours')
      newDate = new Date(new Date(newDate).setHours(new Date(newDate).getHours() + value));
    else if (dat === 'minutes')
      newDate = new Date(new Date(newDate).setMinutes(new Date(newDate).getMinutes() + value));
    else if (dat === 'seconds')
      newDate = new Date(new Date(newDate).setSeconds(new Date(newDate).getSeconds() + value));
    else if (dat === 'millieconds')
      newDate = new Date(new Date(newDate).setMillieconds(new Date(newDate).getMillieconds() + value));
    return newDate;
  };
  const subtractDate = (dat, value) => {
    if (dat === 'years')
      newDate = new Date(new Date(newDate).setFullYear(new Date(newDate).getFullYear() - value));
    else if (dat === 'months')
      newDate = new Date(new Date(newDate).setMonth(new Date(newDate).getMonth() - value));
    else if (dat === 'days')
      newDate = new Date(new Date(newDate).setDate(new Date(newDate).getDate() - value));
    else if (dat === 'hours')
      newDate = new Date(new Date(newDate).setHours(new Date(newDate).getHours() - value));
    else if (dat === 'minutes')
      newDate = new Date(new Date(newDate).setMinutes(new Date(newDate).getMinutes() - value));
    else if (dat === 'seconds')
      newDate = new Date(new Date(newDate).setSeconds(new Date(newDate).getSeconds() - value));
    else if (dat === 'millieconds')
      newDate = new Date(new Date(newDate).setMillieconds(new Date(newDate).getMillieconds() - value));
    return newDate;
  };

  const dataCalc = {
    add(dat, value) {
      addDate(dat, value);
      return this;
    },
    subtract(dat, value) {
      subtractDate(dat, value);
      return this;
    },
    result() {
      return new Date(newDate);
    },
  };
  return dataCalc;
};

// const res = shmoment(new Date(2020, 1, 7, 17, 17, 17))
//   .add('minutes', 2)
//   .add('days', 8)
//   .add('years', 8)
//   .add('months', 8)
//   .subtract('years', 5)
//   .subtract('years', 1)
//   .subtract('hours', 2)
//   .subtract('seconds', 20)
//   .subtract('milliseconds', 200)
//   .result();
// console.log(res);

const res = shmoment(new Date(Date.UTC(2020, 0, 1)))
  .add('years', 2)
  .add('months', 8)
  .add('minutes', 2)
  .add('days', 8)
  .add('years', 8)
  .add('months', 8)
  .subtract('years', 5)
  .subtract('years', 3)
  .subtract('hours', 2)
  .subtract('seconds', 20)
  .subtract('milliseconds', 200)
  .result();
console.log(res);



// function year() {
//   let Dy = new Date(1999,11,31);
//   Dy.setFullYear(Dy.getFullYear() + 3);
// }
