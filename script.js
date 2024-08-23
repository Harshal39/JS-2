//Data types

/*
Two types of data type are 
1.Primitive
2.Non Primitive or ReferenceError

Primitive Data Types are
Number, Boolean, String, Symbol, Undefined and Null

Non Primitive Data types are
Objects, Arrays, Function, Data and RegExp
*/

const number = 12; //Declaring Number
const boolean = true; //Declaring Boolean
const String = "Harshal" //Declaring String
let UNDEFINED;  //Use let keyword whenever there is undefined variable.
console.log(UNDEFINED);
const Null = null; //Declaring Null

const Arrays = [1,2,3,4,5] //Declaring Array
console.log(Arrays);

const Objects = {   //Declaring Objects
    name: "Harshal",
    age:27,
    Gender:"Male"
}
console.log(Objects);

function func(){  //Declaring functions
    console.log("Life is beautiful");
}
func();

const sym = Symbol('Description for the symbol'); //Declaring symbol
console.log(sym); // Represents a unique and immutable primitive value and may be used as the key of an object property.

let now = new Date();  // Declaring Date data type
console.log(now);


/* Typeof operator
   the typeof operator is used to determine the data type of a given value or expression. It returns a string indicating the type.    
*/
let value = "Type of Data";
console.log(typeof value);
let value_1 = 50;
console.log(typeof value_1);


/*
 Type Coercion is the method of automatic conversion of values from one data type to another during certain operations or comparisions.
 Type coercion happens in two ways:-
 1.Implicit == JavaScript automatically convert types.
 2.Explicit == Where you manually convert types.
*/
//Implicit Coercion
let string_coercion = "5" + 2;
console.log(string_coercion); //Here 2 is converted into string and output is 52

let boolean_coercion = "The answer is " + true; 
console.log(boolean_coercion); // "The answer is true" (Boolean true is coerced to a string)

let number_coercion = 5 - "2";
console.log(number_coercion); //  (String "2" is coerced to a number)

let number_conversion = true + 1;
console.log(number_conversion); // 2 (Boolean true is coerced to number 1)

console.log(1 == "1"); // true (String "1" is coerced to number 1)
console.log(false == 0); // true (Boolean false is coerced to number 0)


//Explicit Coercion
// 1.String to Number
let num_1 = "123"; // 123
console.log(typeof num_1);
let num_2 = parseInt("123"); //To convert into number
console.log(typeof num_2); // 123
let num_3 = parseFloat("123.45"); //To convert into float
console.log(typeof num_3); // 123.45

// 2.Number to String
let number_1 = 123;
console.log(typeof number_1); //Number
let string = number_1.toString(); //To convert number into string
console.log(typeof string) //String

//3.Boolean to Number
let boolean_value = true;
boolean_value = Number(boolean_value); //Converting boolean to number
console.log(typeof boolean_value);

//4.String to Boolean
let bools ="true"; 
bools = Boolean(bools); //Converting string to boolean
console.log(typeof bools);



//Short-circuit evaluation refers to the way logical operators (&&, ||) process their operands.It allows JavaScript to stop evaluating expressions as soon as the result is determined, which can be useful for optimizing code and controlling flow.
let result_1 = false && someFunction(); // someFunction() is not called because the first operand is false.
let result_2 = true || someFunction();// someFunction() is not called because the first operand is true.

//Short circuiting makes code more efficient and can help in reducing unnecessary computations.


