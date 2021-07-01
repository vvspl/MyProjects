/* eslint-disable max-classes-per-file */

export class Sportsman { 
    constructor(name){
        // console.log('before',this);
        this.name = name;
        // console.log('after',this);
    }

    run(){
       setTimeout(() => {
        console.log(`${this.name} is running`);
       }, 3000);
    };

    // swim(){
    //     console.log(this.name+'Hallo');
    // }
}

export class Swimmer extends Sportsman {
    constructor(name, style){
        super(name);
        this.style = style;
    };

    swim(){
        console.log(`${this.name} is swimming ${this.style}`);
    }
}

const runner1 = new Sportsman('Joe');
runner1.run();
const runner2 = new Sportsman('Matra');
runner2.run();
const swimmer1 = new Swimmer('John','breaststroke');
swimmer1.swim();
const swimmer2 = new Swimmer('Johanson','butterfly');
swimmer2.swim();
// swimmer1.run();
// swimmer2.run();

// const run = runner1.run();
// run(); // потеря контекста

// const obj  ={
//     name: 'Andrey',
//     run(){
//         console.log(`${this.name} is running`);
//      }
// }
// console.log(obj);

// console.log(swimmer1);