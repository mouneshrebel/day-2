///4. Execute the below code and write your description in txt file
//typeof() keyword is used to find the type of the data type which is assigned to an operand.

//example=>declared variable num and assigned a number 1 to it.

// var num = 1;
// console.log(typeof num); // will find out the type of declared variable as Number datatype
//Output displayed result as number

//instead of the above method we can also directly use the type of keyword in the console.log
// without the need of declaring the variable to an operand using following method.

//1.
//console.log(typeof(1));
//Output = number

//2.
//console.log(typeof(1.1)); // 1.1 is a float value but its considered as a Number data type.
//Output = number

//3. 
//console.log(typeof('1.1')); // since the value 1.1 is declared inside '1.1' js will recognize it as a string data type.
//Output = string

//4. 
//console.log(typeof(true)); // since value is declared as true whic is a keyword for boolean data type it will display it as a boolean.
//Output = boolean

//5. 
//console.log(typeof(null)); //null is a reserved word which is considered as a object data type.
//Output = object

//6. 
//console.log(typeof(undefined));//undefined is a reserved word which is displayed when a variable is not declared.
//Output = undefined
//alternate e.g.
//var a; // variable a is not declared.
//console.log(a); // Output = undefined
//console.log(typeof(undefined)); // Output = undefined
// in both cases the output is undefined bcoz var a is not declared hence js considers its value as undefied.
// Hence the type of undefined is undefined data type in js.

//7.
//console.log(typeof([]));// its a undeclared empty array so js will consider this as an object data type.
//Output = object
//var a = [];
//console.log(a);// Output = []
//console.log(typeof(a)); // Output = object

//8.
//console.log(typeof({}));// its also considered an object
//Output = object

//9.
//console.log(typeof(NaN));// NaN is Not a Number and its represents a value which is not a valid number which comes under number datatype
// Output = number
// var b = NaN; //decalred the variable b with value NaN
// console.log(b); // output = NaN
// console.log(typeof(b)); // Output = number
