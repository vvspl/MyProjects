// const intervalId = this.setInterval();

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
  // startTimer: function startTimer() {
    console.log('context of startTimer is: ', this);
    // полный способ записи функции как свойсва

    // setInterval
    // input func, number
    // output interval_id(number)
    // lose context case2:
    // const intervalId = setInterval(function () {
    // потеря контекта если не стрелочная ф-я
    const intervalId = setInterval(() => {
      console.log('context of callback is: ' + this); // стрелочная ф-я берет контекст свыше

      this.secondsPassed += 1;
      console.log(this.minsPassed+':'+this.secondsPassed);
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
    console.log('interval: ' + intervalId);
  },
  getTime() {
    if (this.secondsPassed<10) return `${this.minsPassed}:0${this.secondsPassed}`;
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// console.log(this); // ссылка на глобальный объект window

// console.log(timer);
timer.startTimer(); // - запуск ф-ции в рамках объекта timer
setTimeout(() =>{timer.stopTimer(); console.log('timer stopped')}, 3000);
setTimeout(() =>{timer.startTimer(); console.log('timer started')},3000);
setTimeout(() =>{timer.stopTimer(); console.log('timer stopped')}, 3000);
timer.stopTimer();


// lose context case1:
// const func = timer.startTimer();
// func();

// example:
// console.log(
//   [1,5,10,19].filter(function (el){
//     console.log(this);
//     return el>5;
//   }.bind(timer)),                 // привязка контекста с помощью bind()
// );
