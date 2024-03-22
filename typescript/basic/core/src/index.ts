//number
let age: number = 40
console.log('number', age)


//string
let fullName: string = 'Mustafa Kaya'
console.log('string', fullName)

//array
let lessons: string[] = ['Html5','Css','Javascript']
console.log('array', lessons)


//union
let unionType: number | string = 22
console.log('union type', unionType)

//union  array
let unionArray: string[] | number[] = [1,2,3] //or assign this ['Html5','Css','Javascript']
console.log('union array', unionArray)

//tuple
let tupleType: [number, string] = [1,'Css']
console.log('tuple', tupleType)

//multiple tuple
let tupleTypeMultiple: [number, string][]

tupleTypeMultiple = [
  [1,'Html5'],
  [2,'Css'],
  [3,'Javascript']
]
console.log('tuple mulitiple', tupleTypeMultiple)


//interface for object
interface userType {id: number, name: string, salary: number}
const users: userType = {
  id: 1,
  name: 'Mesto',
  salary: 5000
}
console.log('interface object', users)


//enum
const enum Size { Small = 1, Medium, Large } //auto increment
let mySize: Size = Size.Medium
console.log('enum', mySize)


//function number
const functionNumber = (salary: number): number => {
  return salary
}

console.log('function number', functionNumber(4000))


//function string
const functionString = (firstName: string, lastName: string): string => {
  return `First-Name ${firstName} Last-Name ${lastName}`
}
console.log('function string', functionString('Mesto', 'Kaya'))

//function union
const functionUnion = (message: string | number): any => {
  return message
}
console.log('function union', functionUnion('Mesto'))
console.log('function union', functionUnion(4000))
