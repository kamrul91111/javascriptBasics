//class based components
export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

//printing out userName
export function printName(user) {
    console.log(`User's name is ${user.name}`)
}

//printing out user's age
export function printAge(user) {
    console.log(`User's name is ${user.age}`)
}

