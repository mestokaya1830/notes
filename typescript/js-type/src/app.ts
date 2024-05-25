
//Primitive Types
const str: String = 'String'
const age: Number = 46
const mixed: String | Number = 'Mixed -> String or Number'
console.log('Primitive Types = ', str, age, mixed)


//array
const strArray: String [] = ['Html','Css','Javascript']
const numArray: Number [] = [1,2,3]
const mixedArray: (String | Number | Boolean) [] = ['String', 200, true]
console.log('Array Types', strArray, numArray, mixedArray)


//object
const objectUsers: Object = [
  {id: 0, name:'Mustafa', state: false},
  {id: 1, name:'Deniz', state: true},
  {id: 2, name:'Hakim', state: false}
]
console.log('Object', objectUsers)


//function
const getUsers = (param: Object) => {
  console.log('Function', param)
}
getUsers(objectUsers)


//interface
interface usersType{
  id: Number;
  name: String;
  state: Boolean;
}
const interfaceUsers: usersType [] = [
  {id: 0, name:'Mustafa', state: false},
  {id: 1, name:'Deniz', state: true},
  {id: 2, name:'Hakim', state: false}
]
console.log('Interface', interfaceUsers)


//dom

const userInput = document.getElementById('username') as HTMLInputElement
const btn = document.getElementById('btn') as HTMLButtonElement
const selectGender =document.getElementById('gender') as HTMLSelectElement

btn.addEventListener('click', () => {
  alert(userInput.value)
})

selectGender.addEventListener('change', () => {
  alert(selectGender.value)
})