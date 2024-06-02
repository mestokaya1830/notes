//primitive----------------------------------------------------
const str: String = 'String Type'
const num: Number = 200
const mixed: String | Number | Boolean = 'Mixed'

console.log('String = ', str)
console.log('Number = ', num)
console.log('Mixed = ', mixed)


//array-------------------------------------------------------
const arrayString: String [] = ['Html','Css','Javascript']
const arrayNumber: Number [] = [1, 2, 3]
const arrayMixed: (String | Number | Boolean ) [] = ['Html', 100, true]

console.log('arrayString = ', arrayString)
console.log('arrayNumber = ', arrayNumber)
console.log('arrayMixed = ', arrayMixed)


//object----------------------------------------------------
interface userType {
  id: Number;
  name: String;
  salary: Number;
  state: Boolean;
}

const users: userType[] = [
  {id: 1, name:'Mesto', salary: 3000, state: true},
  {id: 2, name:'Deniz', salary: 2000, state: false},
  {id: 3, name:'FAruk', salary: 4000, state: true}
]

console.log('Object', users)


//functions------------------------------------------------
const test = (name: String, age: Number) => {
  console.log('Function = ', name +' '+ age)
}
test('Mesto', 48)