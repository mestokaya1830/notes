import { testFunction, User, Admin, Person, UserClass, RegularFunction } from "./module.js";
import ff from './module.js'

//or call User class as UserClass
// import { User as UserClass } from './module.js'

//or collect all in myClass
// import * as Myclass from "./module.js";
// console.log(Myclass)
// console.log(Myclass.Admin('mesto','salak'))

//general export usage
console.log(testFunction())
console.log(RegularFunction())
console.log(User('mesto','kaya'))
console.log(Admin('filiz','polat'))
console.log(Person.fullName())

//default export usage
console.log(ff())


//class general export usage
const newUser = new UserClass('bidik','ilos')
console.log(newUser.name)
console.log(newUser.lastName)
console.log(newUser.fullName())

