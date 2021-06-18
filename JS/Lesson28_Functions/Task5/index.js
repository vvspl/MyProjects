export const shmoment = (date) => {
  const dateObj = {
    years: +`${365 * 24 * 60 * 60 * 1000}`,
    months: +`${(365 / 12) * 24 * 60 * 60 * 1000}`,
    days: +`${24 * 60 * 60 * 1000}`,
    hours: +`${60 * 60 * 1000}`,
    minutes: +`${60 * 1000}`,
    seconds: +`${1000}`,
    milliseconds: +`${1}`,
  };
  let newDate = Date.parse(date);

  const dataCalc = {
    add(dat, value) {
      newDate += dateObj[dat] * value;
      console.log(new Date(newDate));
      return this;
    },
    subtract(dat, value) {
      newDate -= dateObj[dat] * value;
      console.log(new Date(newDate));
      return this;
    },
    result() {
      return new Date(newDate);
    },
  };
  return dataCalc;
};

const res = shmoment(new Date(2020, 1, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .add('years', 8)
  .add('months', 8)
  .subtract('years', 5)
  .subtract('years', 1)
  .subtract('hours', 2)
  .subtract('seconds', 20)
  .subtract('milliseconds', 200)
  .result();
console.log(res);
