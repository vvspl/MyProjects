
/* eslint-disable max-classes-per-file */

export class Vehicle {
    constructor(name, numberOfWheels) {
      this.name = name;
  
      this.numberOfWheels = numberOfWheels;
    }
  
    move() {
      console.log(`${this.name} is moving`);
    }
  
    stop() {
      console.log(`${this.name} stopped`);
    }
  }
  
  export class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
      super(name, numberOfWheels);
      this.maxSpeed = maxSpeed;
    }
  
    move() {
      console.log(`${this.name} lifting anchor up`);
      super.move();
    }
  
    stop() {
      super.stop();
      console.log(`${this.name} lifting anchor down`);
    }
  }
  
  const ship1 = new Ship('Argo', false, 90);
  ship1.move();
  ship1.stop();