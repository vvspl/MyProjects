export const shmoment = (date) => {
  const dateObj = {
    years: +`${date.getFullYear()}`,
    months: +`${date.getMonth()}`,
    days: +`${date.getDate()}`,
    hours: +`${date.getHours()}`,
    minutes: +`${date.getMinutes()}`,
    seconds: +`${date.getSeconds()}`,
    milliseconds: +`${date.getMilliseconds()}`,
  };
    const dataCalc = {
    add(dat, value) {
    const a = dateObj[dat];
      dateObj[dat] += value;
       return this;
    },
    subtract(dat, value) {
        const a = dateObj[dat];
      dateObj[dat] -= +value;
      return this;
    },
    result() {
      const newDateObj = new Date(
        dateObj.years,
        dateObj.months,
        dateObj.hours,
        dateObj.minutes,
        dateObj.seconds,
        dateObj.milliseconds
      );
      return newDateObj;
    },
  };
  return dataCalc;
};

const res = shmoment(new Date(2020, 1, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .subtract('hours', 2)
  .subtract('seconds', 20)
  .subtract('milliseconds', 200)
  .result();
console.log(res);
