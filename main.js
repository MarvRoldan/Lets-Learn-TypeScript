"use strict";
exports.__esModule = true;
console.log("changed");
var a = 1;
var b = 1 + 2;
var c = "Hello World!";
var anotherOne = 1;
var andAnotherOne = "string";
var var1 = 1;
var stringVar1 = "stringy";
var anotherLetVariableNumber = 1;
anotherLetVariableNumber = 2;
var anotherLetStringVariable = "string original";
anotherLetStringVariable = "string the remix";
var anotherLetBoolean = true;
anotherLetBoolean = false;
var boolExampleDefined = true;
var numberExampleDefined = 3;
var stringExampleDefined = "string!";
stringExampleDefined = "new string!";
var anotherVariable;
anotherVariable = 2;
anotherVariable = "string";
anotherVariable = false;
var numberExample;
numberExample = 4;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var booleanExample;
booleanExample = true || (true && true);
console.log(booleanExample);
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(4, 6));
var concatenateStrings = function (stringA, stringB) {
    return stringA + stringB;
};
console.log(concatenateStrings("Hello ", "World!"));
var returnNothingFunction = function (a) {
    console.log(a);
};
var booleansAndOperatorFunction = function (a, b) {
    return a && b;
};
console.log(booleansAndOperatorFunction(true, true));
var neverReturnFunction = function () {
    while (true) {
        console.log("never returning!");
    }
};
var functionWithAny = function (a, b) {
    return 9000 + "Hello " + 9001 + "World!";
};
console.log(functionWithAny("Hello " + "World!", false));
var functionWithTypeGuards = function (a) {
    if (typeof a === "string") {
        console.log("Input is a string data type!");
    }
    else if (typeof a === "number") {
        console.log("Input is a number data type!");
    }
};
functionWithTypeGuards("Hello World!");
functionWithTypeGuards(8);
var stringVariable = "123";
var fn2 = function (inputNumber) {
    console.log(inputNumber);
};
fn2(Number(stringVariable));
var numberVariable = 432;
var fn3 = function (inputString) {
    console.log(inputString);
};
fn3(String(numberVariable));
var unionTypesFunction = function (a) {
    if (typeof a === "string") {
        console.log("You passed in a string!");
    }
    else if (typeof a === "number") {
        console.log("You passed in a number!");
    }
};
unionTypesFunction("a");
unionTypesFunction(2);
var varA = "Hello World!";
var literalTypesFunction = function (a) {
    console.log("This is a literal type! " + a);
};
literalTypesFunction("literally");
var literallyReturningLeralsFunction = function () {
    return "literally";
};
var unionTypeLiteral = function (a) {
    return 5;
};
console.log(unionTypeLiteral(true));
function stringsAndNumbersFunctionExample(a, b) {
    return "a";
}
console.log(stringsAndNumbersFunctionExample(878787, "Hello World!"));
var unionTypeLiterals = function (a) {
    return 5;
};
var basicConsoleDotLogFunction = function () {
    return console.log("Hello I am the basic function");
};
var basicConsoleDotLogFunction2 = function () {
    return console.log("Hello I am the basic function #2");
};
var basicConsoleDotLogFunction3 = function () {
    return console.log("Hello I am the basic function #3");
};
basicConsoleDotLogFunction();
var functionAcceptingAnotherFunctionInParams = function (callback) {
    callback();
};
functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction);
functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction2);
functionAcceptingAnotherFunctionInParams(basicConsoleDotLogFunction3);
var functionReturningBasicFunction = function () {
    return function (a) {
        console.log("This function was printed!");
        console.log(a);
        return 5;
    };
};
console.log(functionReturningBasicFunction()("Hello World Again!"));
var functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction = function (aString, callback) {
    var closureConst = callback(aString);
    return function (callbackString) {
        return closureConst + callbackString;
    };
};
console.log(functionTakingOneFunctionAsAnArgumentAndReturningAnotherFunction("Hello ", function (a) {
    return a;
})("World! =("));
function anyFunction(a, b) {
    a = 2;
    a = {};
    a = "42";
    a = +a;
    b = 8;
    b = { objectProperty: "okThen" };
    var c = +a + " " + b.objectProperty;
    return c;
}
console.log(anyFunction("StringsStringsStrings", 9001));
var person = {
    name: "John Doe",
    id: 98768767,
    likesPizza: true
};
console.log(person.name.toUpperCase());
var person2 = {
    name: "John Doe",
    id: 98768767,
    likesPizza: true
};
var aNumber = 2;
var anotherPerson = {
    name: "John Doe",
    id: 56465465,
    likesPizza: true,
    dog: {
        dogName: "Doggy",
        isHappy: true
    }
};
var arr = ["one", "two", "three", "four"];
arr.forEach(function (element) {
    console.log(element);
});
var numberArray = [];
var numberOrStringArray;
numberOrStringArray = [1, 2, 3, "one", "two", "three"];
numberOrStringArray.forEach(function (element) {
    console.log(element);
});
var PizzaToppings;
(function (PizzaToppings) {
    PizzaToppings[PizzaToppings["PINEAPPLE"] = 0] = "PINEAPPLE";
    PizzaToppings[PizzaToppings["PEPPERONI"] = 1] = "PEPPERONI";
    PizzaToppings[PizzaToppings["HAM"] = 2] = "HAM";
    PizzaToppings[PizzaToppings["CHEESE"] = 3] = "CHEESE";
    PizzaToppings[PizzaToppings["MUSHROOMS"] = 4] = "MUSHROOMS";
    PizzaToppings[PizzaToppings["MORE"] = 5] = "MORE";
})(PizzaToppings || (PizzaToppings = {}));
console.log(PizzaToppings);
console.log(PizzaToppings.PINEAPPLE);
console.log(PizzaToppings.HAM);
var myMap = new Map();
myMap.set("one", "value of one");
myMap.set("two", "value of two");
myMap.set("three", "value of three");
console.log(myMap.get("three"));
var myOtherMap = {
    1: "Hello",
    2: "World!",
    3: "Third Value",
    4: "Fourth Value",
    8765763574354: "Whatever Value"
};
myOtherMap[1];
console.log(myOtherMap[1]);
myOtherMap[8765763574354];
console.log(myOtherMap[8765763574354]);
myOtherMap[9001] = "This value is over 9000!";
console.log(myOtherMap[9001]);
var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet);
mySet.add(2);
mySet.add(3);
mySet.add(4);
console.log(mySet);
var myArray = ["one", 1, "two", 2, "three", 3];
myArray.forEach(function (element) {
    console.log("This is the value~ " + element);
});
function addition(_a) {
    var numOne = _a[0], numTwo = _a[1];
    var sum = numOne + numTwo;
    console.log(sum);
}
addition([1, 2]);
var myArray2 = [1, 2, 3, "a", "b", "c"];
console.log.apply(console, myArray2);
function signIn(signInMessage) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(signInMessage + " " + names.join(", ") + ".");
}
signIn("What's up", "Tim", "Bruce", "Dick", "Jason");
function defaultParamsFunction(firstParam, secondParam) {
    if (secondParam === void 0) { secondParam = "default param!"; }
    console.log("first Param " + firstParam + " and now the second param " + secondParam);
}
defaultParamsFunction("one param");
defaultParamsFunction("one param", "two param");
var Rectangle = (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        return this.calcArea();
    };
    Rectangle.prototype.calcArea = function () {
        return this.height * this.width;
    };
    return Rectangle;
}());
var myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area());
console.log(myRectangle.calcArea());
var Addition = (function () {
    function Addition() {
    }
    Addition.calcSum = function () {
        return this.numOne + this.numTwo;
    };
    Addition.numOne = 1;
    Addition.numTwo = 2;
    return Addition;
}());
console.log(Addition.calcSum());
var Rectangle2 = (function () {
    function Rectangle2(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectangle2.prototype.area = function () {
        return this.calcArea();
    };
    Rectangle2.prototype.calcArea = function () {
        return this.height * this.width;
    };
    return Rectangle2;
}());
var rectObject = new Rectangle2(2, 3);
console.log(rectObject.area());
console.log(rectObject.calcArea());
var originalRect = new Rectangle(2, 3);
console.log(originalRect.width);
console.log(originalRect.height);
var printTrianglePoints = function (trianglepoints) {
    console.log(trianglepoints.pointA, trianglepoints.pointB, trianglepoints.pointC);
};
var myExports_1 = require("./myExports");
var classExports_1 = require("./classExports");
console.log(myExports_1.myText);
var square = new classExports_1.Square(3, 3);
console.log(square.getArea());
var CaseChange;
(function (CaseChange) {
    function upperCase(myString) {
        return myString.toUpperCase();
    }
    CaseChange.upperCase = upperCase;
    function lowerCase(myString) {
        return myString.toLowerCase();
    }
    CaseChange.lowerCase = lowerCase;
})(CaseChange || (CaseChange = {}));
console.log(CaseChange.lowerCase("UPPER ORIGINALLY"));
console.log(CaseChange.upperCase("lower originally"));
//# sourceMappingURL=main.js.map