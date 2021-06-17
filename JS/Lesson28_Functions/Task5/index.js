const shmoment = (date) => {
    const dateObj = { 
        years: +`${date.getFullYear()}`,
        months: +`${date.getMonth()}`,
        days: +`${date.getDay()}`,
        hours: +`${date.getHours()}`,
        minutes: +`${date.getMinutes()}`,
        seconds: +`${date.getSeconds()}`,
        milliseconds: +`${date.getMilliseconds()}`,
    };
    const dataCalc = {
    add(dat, value){
        dateObj[dat] += value;
        return this;
    },
    subtract(dat, value){
        dateObj[dat] -= +value;
        return this;
    },
    result(){
        return dateObj;
    }
}
return dataCalc;
};

const res = shmoment(new Date(2020, 1, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result();
  console.log(res);