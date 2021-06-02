export const callbackPrompt = {
  message: 'Hello!',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    // setTimeout(this.showPrompt(), ms); - теряет контекст
    setTimeout(() => this.showPrompt(), ms); // для восстановления потеряного контекста
    // setTimeout(this.showPrompt.bind(this), ms);  // - одно из решений
  },
};

callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(5000);
