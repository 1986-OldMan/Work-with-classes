/**
   *************** index.js ***************
   * constructor = A special method for assigning propertier.
   *               Automatically called when creating an object.
   * 
   * class = A 'blueprint' for creating objects.
   *         Define propertier and/or methods.
   * 
   * super = Reference to the parent class (super class)
   *         Very similar to "this" keyword
   *         Can use a super classes: constructor, methods
   * 
   * this = A reference to the object that
   *       we're currently working with
 */

class Car {
    constructor(make , model , year , color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
};

let CarOne = new Car('Opel' , 'Meriva' , 2007 , 'Gray');
console.log(CarOne);

let CarTwo = new Car('Hyundai' , 'Elantra' , 2023 , 'White');
console.log(CarTwo.make);
console.log(CarTwo.model);
console.log(CarTwo.year);
console.log(CarTwo.color);

/**
   * This section is Class with methods.
 */

class FunctionalityOfCar {
    drive() {
        console.log('You drive the car!');
    }

    brake() {
        console.log('You step on the brake!');
    }
};

let functionOne = new FunctionalityOfCar();
let functionTwo = new FunctionalityOfCar();

functionOne.drive();
functionTwo.brake();


/**
   * This section is Class with constructor , super and methodes.
 */

class Employees {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
    description() {
        console.log('Aloha my name is' , this.name);
        console.log('i have', this.age , 'years old');
    }
}

class Workers extends Employees {
    constructor(name , age , assemblyLine) {
        super(name , age);
        this.assemblyLine = assemblyLine;
    }
    descriptionWorker() {
        super.description();
        console.log('i work on', this.assemblyLine);
    }
};

class LineCoordonator extends Employees {
    constructor(name , age , position) {
        super(name , age);
        this.position = position
    
    }
    descriptionLineCoordinator() {
        super.description();
        console.log('i work as' , this.position);
    }
};

let worker = new Workers('FiraXis' , 30 , 'Building Management Solutions');
// console.log(worker.name);
// console.log(worker.age);
// console.log(worker.assemblyLine);

let coordinator = new LineCoordonator('Carly' , 45 , 'Line Coordinator');
// console.log(coordinator.name);
// console.log(coordinator.age);
// console.log(coordinator.position);

worker.descriptionWorker();
coordinator.descriptionLineCoordinator();

/**
   * This section is Class with this.
 */
class Vehicles{

    constructor(make , model , year , color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive() {
      console.log("You drive the",this.model);
    }
    brake() {
      console.log("You step on the",this.model+ "'s brakes!");
    }
  }
  
  let car1 = new Vehicles("Opel" , "Meriva" , 2007 , "Black");
  let car2 = new Vehicles("BMW" , "525i" , 2005 , "White");
  
  console.log(car1);
  console.log(car2);


