"use strict";
// primitive data types
// number
// string
// boolean
// undefined
// null
// bigint
// symbol

// console.log(typeof "1");
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null); // object
//console.log(1 == true); //true
// var a = 1;

// function foo(input) {
//   input = 2;
//   console.log(input); // 2
// }
// foo(a);
// console.log(a); // 1

// var b = 5;
// var c = b;
// b = 6;
// console.log(b, c); // 6, 5

// // coersion
// const result = true + false;
// console.log(result);

// console.log("1" == 1); // true
// console.log("1" === 1); // false

//truthy and falsy value
/* const a = undefined
if(a !== undefined){
  console.log("true")
}else{
  console.log("false")
} */

// // object

// var obj = {};
// console.log(obj);

// var obj2 = new Object();
// console.log(obj2);

// var obj3 = Object.create({});
// console.log(obj3);

// class MyObject {
//   constructor(name) {
//     this.name = name;
//   }
// }

// var obj4 = new MyObject("nicole");
// console.log(obj4);

// function
// function foo() {}

// foo.a = "nicole";
// console.log(foo.a);

// var arr = [1, 2, 3];
// console.log(arr);

// var obj = { name: "a" };
// function foo2(input) {
//   input.name = "b";
//   console.log(input); // b
//   console.log(input === obj);
// }
// foo2(obj);
// console.log(obj); // b

// var obj2 = { name: "a" };
// function foo3(input) {
//   input = { name: "b" };
//   console.log(input);
//   console.log(input === obj);
// }
// foo3(obj);
// console.log(obj2);

// primitive data (value), non primitive data (reference)

// declare variables
//            var      |    let     |    const
// scope:   function      block         block
// hoist:   yes           no            no
// redeclare  yes         no            no
// reassign   yes         yes           no

// function foo4() {
//   var a;
//   console.log(a);
//   if (true) {
//     var a = 1;
//   }
//   console.log(a);
// }

// foo4();

// function foo5() {
//   // console.log(a); // not defined vs undefined
//   if (true) {
//     let a = 1;
//   }
//   // console.log(a);
// }

// foo5();

// var a; // declaration
// var a = 1; // assignment
// a = 2;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = 1;
// c = 2;

// const o = { name: "nicole" };
// o.name = "adam";
// // o = {};
// console.log(o);

// console.log(foo3());
// function foo() {
//   console.log("in the function");
// }

// const foo3 = () => {
//   console.log("in the function");
// };

// class

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log(this.name + " is walking...");
//     }
// }

// const p = new Person("nicole");
// p.__proto__.walk = function () {
//   console.log(this.name + " is walking...");
// };
// Person.prototype.walk = function () {
//   console.log(this.name + " is walking...");
// };
// p.walk = function () {
//   console.log(this.name + " is walking...");
// };
//p.walk();
// console.log(p);
// p2 = new Person("adam");
//p2.walk();

// // constructor function
// function Person1(name) {
//   this.name = name;
// }

// const p1 = new Person1("nicole");
// console.log(p1);

// function Person2(name) {
//   let obj = {};
//   obj.name = name;
//   obj.__proto__ = Person2.prototype;
//   return obj;
// }

// const p2 = Person2("nicole");
// console.log(p2);

// __proto__: instance
// prototype: class

//prototype chain, javascript inheritance
//oop(object oriented programming language) principle:
/* 
  inheritance
  polymorphism
  encapsulation
  abstraction
*/

//overriding: same method name in child class will over write the method from parent class
//overloading(NA in js): same method name with different set of argument
// class Employee extends Person {
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary;
//     }

//     walk() {
//         console.log("employee", this.name, "is walking...");
//     }
//     work() {
//         console.log(this.name + " is working...");
//     }
// }

// const employee = new Employee("adam", 1000);

// employee.walk(1000); //employee
// employee.work();
// console.log(employee.name);
// console.log(employee.salary);

//prototype chain
/* 
class Manager extends Employee {

} */
/* 
  instance method
  prototype method: will be accessed by all the child instance
  static method
*/

//class factory, bluerint
//factory has a toolbox, prototype

//instance: product

// employee.__proto__.run = function(){
//   console.log()
// }

// Employee.prototype.run = function(){

// }

// console.log(Employee.prototype === employee.__proto__)//true

//class constructor function: factory create instance
//prototype:
//instance
// employee.__proto__.getPaid = function () {
//     //typeError
//     console.log(this.name, "get paid");
// };

//instance method
/* employee.getPaid = function(){//typeError
  console.log(this.name, "get paid");
}
 */

// const employee1 = new Employee("Nicole", 2000);

// console.log(employee1);
// employee1.getPaid(); //reference

// //static method
// Employee.meet = function () {
//     console.log("meeting!");
// };

// //object literal

// const obj = {};
// //const obj = new Object()
// console.log(obj.hasOwnProperty);

// instance and class

// console.log(employee1.hasOwnProperty);
// //employee1 => Employee class => Person class => Object class => hasOwnProperty

// console.log(typeof typeof obj); //string

// console.log(employee1 instanceof Employee); //true

// console.log(obj instanceof Employee); //false

// //console.log(typeof array);//object

// console.log(typeof function () {}); //function

// const foo = function () {};
// foo.a = 1;
// console.log(foo.a);
// console.log(foo instanceof Object);
// console.log(foo instanceof Function);

/* 
non-primitive type: passed by reference
  object is object
  array is object
  function is object
*/

/* const array1 = new Array();
console.log(array1) */
// const array = [1, 2, 3];
// console.log(array);
// console.log(array[1]);
/* 
  array method: 
    forEach, map, filter, find,
    reduce, sort
    slice, splice
    findIndex, indexOf, 
    join
    pop push shift unshift
*/

/* for(let i = 0; i < array.length; i++){
  console.log(array[i])
} */

/* 
  what: 
    array method, function
    arg: function(arg:element, index, array)
    return nothing
  why: functional programming, common javascript
  how: loop through the elements of the array and call the callback with arg of each element
*/
// forEach
// const returnedValue = array.forEach(function (element) {
//     console.log(element);
// });
// console.log(returnedValue);

/* 
  what: 
    array method, function
    arg: function(arg:element, index, array), return element value
    return array, each element being the value return from the callback
  why:
  how: 
*/
//map
// const returnedValue1 = array.map(function (element) {
//     console.log(element);
//     return element + 1;
// });
// console.log(returnedValue1 === array); //false

/* 
  what: 
    array method, function
    arg: function(arg:element, index, array), return boolean
    return array, each element being the value return from the callback
  why:
  how:
*/
//filter
// const returnedValue2 = array.filter(function (element) {
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(returnedValue2); //length: 1, [2]

/* Array.prototype.forEach = function(){
  console.log("substitute foreach")
} */

//overriding
/* array.forEach(function(element){ //1,2,3
  console.log(element)
})
 */
/* 
  instance method:
    define a method for an instance only
  prototype method
    define a method for all instances from a class
    advantage: saves memory
*/

//this: is the instance who calls the function
// Array.prototype.myForEach = function (callback) {
//     const array = this;
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array);
//     }
// };

// array.myForEach(function (element) {
//     console.log(element);
// });

//sum up all the element of the array, 6

/* 
  what:
    array method, function
    args: function(accumulator, current, index, array, return nextAccumulator), initial value
  why: reduce the elements from an array into one
  how: loop each element of the array and call the callback with argument of the element and reduce into a result
*/

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
// }
// console.log(sum); //6

// sum = array.reduce(function (accumulator, current) {
//     return accumulator + current;
// }, 0);

// console.log(sum);

// Array.prototype.myReduce = function (callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         const currentValue = this[i];
//         accumulator = callback(accumulator, currentValue, i, this);
//     }
//     return accumulator;
// };
// sum = array.myReduce(function (accumulator, current) {
//     return accumulator + current;
// }, 0);

// console.log(sum);

//map, filter, find, concat, push, pop, slice, splice, some, every, reverse

//find similar filter,
//concat, [1] [2,3]
//push: change length, add to the end
//slice: return a new array, create new array, push to the new array
//splice: in place, args(index, number of element to be removed, element you want to add to the array)
//some: callback(element) return boolean,
//every: callback(element) return boolean,

// function foo() {
//     console.log(arguments); //
// }

// foo(1, 2, 3, 4, 5);
//push pop
//splice: remove element in place, add element in place

// const arr = [1, 2, 3];

/* arr.splice(1,1); // remove 1 element from index 1
console.log("arr after removing", arr) */

/* arr.splice(1,0, 8)

console.log("arr after adding", arr);//[1,8,2,3] */

//arr.splice(1,1,8,9);

//console.log(arr)//[1,8,9,3]

/* 
  [1,2,3,4]
  arr.splice(1,1)
  [1,3,4]
*/
// Array.prototype.mySplice = function () {
//     arguments = Array.from(arguments);
//     const index = arguments[0];
//     const deleteNum = arguments[1];
//     const newElements = arguments.slice(2);
//     let tempArr; //spread operator
//     if (deleteNum !== undefined) {

//         tempArr = [...this.slice(0, index), ...this.slice(index + deleteNum)];
//         //tempArr = [...[1], ...[3]] //[1,3]
//     }

//     if (newElements.length !== 0) {
//         tempArr = [
//             ...tempArr.slice(0, index),
//             ...newElements,
//             ...tempArr.slice(index),
//         ];
//     }

//     this.length = tempArr.length;
//     tempArr.forEach((item, index) => {
//         this[index] = item;
//     });
// };
// //[1,2,3]
// console.log("before", arr);
// arr.mySplice(1, 1, 4); //[1,4,3]
// console.log("after", arr);

//const arr = [1,2,3];

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

// for(let key in arr){
//   console.log(key, arr[key])
// }

//for of loop
// for(let value of arr){
//   console.log(value)
// }

// const obj = {name:"adam", age:18, key:true};

/* for(let key in obj){
  console.log(key, obj[key])
} */

//dot notation
//bracket notation

// const name = "key";
/* 
console.log(obj.name);//adam

console.log(obj[name]);//true

console.log(obj["key"])//true */

//Object.keys: arg: obj you want to loop, return arr
//keys a prototype method, static method?

// Object.keys(obj).forEach(item=>{
//   console.log(item)
// })

// Object.values(obj).forEach(item=>{
//   console.log(item)
// })

//entries: return array of array of length 2, 2 dimensional array
/* console.log(Object.entries(obj))
Object.entries(obj).forEach(item=>{
  console.log(item[0], item[1])
}) */

/* 
  object: hashmap, O(1)
  array: ordered list, filter, find O(n)
*/

//browser,
//ecmascript: standard of syntax
//ES5: var
//ES6: let const, spread operator, rest operator, detructuring, class, promise, arrow function, template literal

//spread operator: copy array, object
// const arr = [1,2,3];
// const arr1 = arr;
// console.log(arr === arr1);//true
// arr[1] = 0;
// console.log(arr, arr1)//arr: [1,0,3], arr1: [1,0,3]
// console.log(arr === arr1); //true;
/* const arr2 = [1,2,3];


console.log(arr, arr2); //false */
/* const arr2 = []
for(let i = 0; i < arr.length; i++){
  arr2.push(arr[i])
}
console.log(arr === arr2);//false */

/* const arr2  = [...arr];
console.log(arr === arr2); //false */

/* const obj = {name: "adam", age:18};
const obj1 = {}
for(let key in obj){
  obj1[key] = obj[key]
}
console.log(obj === obj1); //false */

// const obj = {name: "adam", age:18};
// const obj1 = {...obj};

// console.log(obj, obj1); //false

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// //const arr3 = [arr1, arr2]; //length:2, 2 dimensional array
// const arr3 = [7, ...arr1, 0, ...arr2, 9, 8]; //[7,1,2,3,0,4,5,6,9,8]

// const obj = { name: "adam", age: 18 };

// const obj1 = { ...obj, name: "Nicole" }; //2 {name:"Nicole", age:18}
// console.log(obj1);

// const arr = [
//   1,
//   [2,3],
//   4
// ]
/* 
//shallow copy

const arr1 = [...arr];

console.log(arr === arr1);//false
console.log(arr[1] === arr1[1])//true

arr1[1] = [...arr[1]];
console.log(arr[1] === arr1[1])//false


const obj = {name:"adam", age:18, item:{car:1}};

const obj1 = {...obj};

console.log(obj === obj1); //false
console.log(obj.item === obj1.item);//true */

// destructuring: syntax sugar for declaring varibles and initialize them with value of corresponding property in an object

// const obj = { name: "adam", item: { car: 1 } };

// const name = "Nicole";
// const {
//     name: name1,
//     age = 20,
//     item: { car },
// } = obj;

// /* const name = obj.name;
// const age = obj.age; */

// console.log(name1, age, car); //"adam", 20, 1

// const arr = [1, 2, 3, [4, 5]];
// const [,,,[first, second]] = arr;

// console.log(first,second); //4,5

/* //destruturing
let [...arr2]= arr */

//rest operator: collecting arguments of a function into an array

//hoisted

//var hoist declaration, not initilization

// foo(1,2,3);
// function foo(a,...args){
//   console.log(args); [2,3]
// }

// const foo = (...args) => {
//     console.log(args);
// };

// //this keyword

// const obj = {
//     name: "adam",
//     age: 18,
//     walk: function () {
//       console.log(this);// obj
//         const innerFunction = () => {
//           console.log(this)//obj
//         };
//         innerFunction();
//     },
// };
// // regular function: this refers to the object that calls the function
// // arrow function: this is from the lexical scope of the function
// obj.walk(); //adam is walking

// const obj1 = {
//     name: "Nicole",
//     age: 20,
//     walk: obj.walk,
// };

// obj1.walk(); //Nicole

// const obj2 = {
//   name: "adam",
//   age: 18,
//   walk:() => {
//     console.log(this)//window object
//   }
// };

// obj2.walk();//undefined

//for while if try catch

const obj = {
    name: "adam",
    age: 18,
    walk:  () => {
        console.log(this); //1, undefined/window
        const innerFunction = () => {
            console.log(this); //2, undefined/window
            const innerFunction2 = () => {
                console.log(this); //3,undefined/window
            };
            innerFunction2();
        };

        innerFunction();
    },
};

obj.walk();

// foo(1,2,3)
