const intervalId = this.setInterval();

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    setInterval(this.secondsPassed + 1, 1000);
  },
  getTime() {
    return this.minsPassed + ':' + this.secondsPassed;
  },
  stopTimer() {
    clearInterval(intervalId);
  },
  resetTimer(){
      this.minsPassed = 0;
      this.secondsPassed = 0;
  }
};
