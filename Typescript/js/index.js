var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num;
num = 1;
var str;
str = "1";
var bool;
bool = true;
var u;
u = undefined;
var n;
n = null;
num = null;
num = undefined;
var numArr = [1, 2, 3];
var numArr2 = [1, 2, 3];
var strArr = ["1", "2", "3"];
strArr.push("1");
strArr[0].slice(0);
function foo(name, age) {
    return {
        name: name,
        age: age ? age : -1,
    };
}
console.log(foo("nicole"));
var obj = { name: "nicole", age: 18 };
var obj2 = { name: "nicole", age: 18 };
var obj3 = { name: "nicole", age: 18 };
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var obj4 = { name: "nicole", age: 18 };
var p = new Person("nicole", 18);
function add(x, y) {
    return x + y;
}
var add2 = function (x, y) {
    return x + y;
};
var add3 = function (x, y) { return x + y; };
var add4 = function (x, y) { return x + y; };
var add5 = function (x, y) { return x + y; };
var age;
age = 18;
age = "18";
var direction = "north";
var Car = (function () {
    function Car(color) {
        this.color = color;
    }
    Car.prototype.print = function () {
        return "The color of the car is " + this.color;
    };
    Car.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    return Car;
}());
var car = new Car("white");
console.log(car.print());
car.setColor("black");
console.log(car.print());
var CarColor;
(function (CarColor) {
    CarColor["White"] = "White";
    CarColor["Black"] = "Black";
    CarColor["Silver"] = "Silver";
})(CarColor || (CarColor = {}));
var Sedan = (function (_super) {
    __extends(Sedan, _super);
    function Sedan(color) {
        var _this = _super.call(this, color) || this;
        _this.type = "sedan";
        return _this;
    }
    Sedan.prototype.print = function () {
        return "".concat(this.type, ": ").concat(_super.prototype.print.call(this));
    };
    return Sedan;
}(Car));
var sedan = new Sedan("White");
console.log(sedan.print());
//# sourceMappingURL=index.js.map