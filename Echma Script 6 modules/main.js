import User, {printName, printAge} from '/user.js';

//user object
const user = new User('Kamrul', 15)
console.log(user);

//passing the user object
printName(user);
printAge(user);