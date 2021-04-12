//javascript is all about behavior
//all statements in js has to be terminated with a (;)
//naming conventions, they cannot be reserved keywords such as let, if, else, var, const etc. 
//should be meaningful
//cannot start with a number
//cannot contain multiple words, nor hyphens. Just use camelCase
//definitely case sensitive

//const means constant, as in it will remain the same instead of declaring it as let
// const interestRate = 0.3;
// console.log(interestRate);
////////////////primitive data///////////////////////
//they are all variables, hence declared with let instead of const
let name = 'Kamrul'; //String Literal
// //in js there no int, float and double. They are all type number
let age = 23; // Number Literal
let isApproved = true; // boolean Literal
let firstName = undefined; // undefined
let selectedColor = null; //null

//////////Object data//////////////////
//declare person Object
//let == reusable
//const == not reusable
//{} == object Literal
let person = {
    name : 'Wazeen',
    age : 23
};

///////////////for changing object data/////////////


//Method 1 : Dot notation
person.name = 'Torfa';

//Method 2 : Bracket Notation
//person['name'] = 'Mary'

//console.log(person.name);

//////////////////////////////////////////////


////////////////Array Literlas//////////////////////////

// let selectedColors = ['red', 'blue'];
// //assigning the third element
// //in js, you can store different data types in the same array
// selectedColors[2] = 'pink';
// console.log(selectedColors);

///////////Functions////////////////////////
//parameter is what you have at the time of declaration
//name is only a parameter of this function which cannot be used elsewhere
//This function is simply performing a task
function greet (firstName, lastName) {
    console.log(' Hello ' + firstName + '' + lastName);
}


//to indicate a statement
//argument is the actual value that is supplied
//greet('Kamrul ', 'Islam');

//Function to calculate a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
