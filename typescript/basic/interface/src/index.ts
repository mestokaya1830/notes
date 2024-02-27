//expicit types

//inertafce strict object types
//object----------------------------------
interface userType {
  firstName: string,
  lastName: string,
  age: number,
}
let users: userType[] = [
  {firstName:'Mesto', lastName: 'Kaya' ,age:50},
  {firstName:'Ali', lastName: 'Demir' ,age:30},
  {firstName:'Deniz', lastName: 'Kaplan' ,age:20}
]
console.log(users)
