// primitive data types

let num: number;
num = 1;

let str: string;
str = "1";

let bool: boolean;
bool = true;

let u: undefined;
u = undefined;

let n: null;
n = null;

num = null;
num = undefined;

// objects
let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

let strArr: string[] = ["1", "2", "3"];
strArr.push("1");

strArr[0].slice(0);

function foo(name: string, age?: number) {
  return {
    name: name,
    age: age ? age : -1,
  };
}

console.log(foo("nicole"));

// interface
interface IPerson {
  name: string;
  age: number;
}

let obj: IPerson = { name: "nicole", age: 18 };

// type
type TPerson = { name: string; age: number };

let obj2: TPerson = { name: "nicole", age: 18 };

// anonymous, inline, can't reuse
let obj3: { name: string; age: number } = { name: "nicole", age: 18 };

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let obj4: Person = { name: "nicole", age: 18 };
let p = new Person("nicole", 18);

// function
function add(x: number, y: number): number {
  return x + y;
}
// arrow function
const add2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

//typeof
const add3: typeof add = (x, y) => x + y;

// type aliases
type AddFn = (x: number, y: number) => number;
const add4: AddFn = (x, y) => x + y;

// interface
interface IAddFn {
  (x: number, y: number): number;
}
const add5: IAddFn = (x, y) => x + y;

// union
let age: number | string;
age = 18;
age = "18";

// union with literal types
type Direction = "north" | "south" | "west" | "east";
let direction: Direction = "north";

// class: OOP, inheritance, encapsulation, polymorphism, abstraction

class Car {
  // public color: string;
  private color: string; // only accessible within the class
  // protected color: string; // only accessible within the class and subclasses
  // readonly color: string;

  constructor(color: string) {
    this.color = color;
  }

  print() {
    return "The color of the car is " + this.color;
  }

  setColor(newColor: string) {
    this.color = newColor;
  }
}

let car = new Car("white");
// console.log(car.color);
console.log(car.print());
car.setColor("black");
console.log(car.print());

const enum CarColor {
  White = "White",
  Black = "Black",
  Silver = "Silver",
}

class Sedan extends Car {
  type: string;
  constructor(color: CarColor) {
    super(color);
    this.type = "sedan";
  }

  print(): string {
    return `${this.type}: ${super.print()}`;
  }
}

let sedan: Sedan = new Sedan(CarColor.White);
console.log(sedan.print());

// abstraction
interface IRadio {
  turnOnRadio(): void;
}

class Car2 implements IRadio {
  turnOnRadio(): void {}
}

class CellPhone implements IRadio {
  turnOnRadio() {}
}

interface IY {
  y: number;
}

interface IPoint extends IY {
  x: number;
}

let point: IPoint = { x: 1, y: 1 };

type TY = { y: number };

interface IPoint2 extends TY {
  x: number;
}

type TPoint = IY & { x: number };

// generic types
function toNumArr(x: number, y: number): number[] {
  return [x, y];
}

function toStrArr(x: string, y: string): string[] {
  return [x, y];
}

function toArr<T>(x: T, y: T): T[] {
  return [x, y];
}

let numArray = toArr<string>("1", "2");

// tuple
let tuple: [number, Function, { name: string }] = [
  1,
  () => {},
  { name: "nicole" },
];

// let x = tuple[3]
