//basic
const fullName: string = 'Mustafa Kaya'
const union: (string | number | boolean) = 10
console.log('Basic String', fullName)
console.log('Basic Union', union)

//tuple (order is importent)
const tuple: [number, string, boolean] = [1, 'Html', true]
console.log('Tuple', tuple)


//array
const langs: string [] = ['Html','Css','Javascript']
const arrayUnion: (string | number | boolean) [] = ['Html','Css','Javascript', 1, 2, 3, true]
console.log('Array String', langs)
console.log('Array Union', arrayUnion)


//array tuple (order is importent)
const arrayTuple: [number, string, boolean] [] = [
  [1, 'Html', true],
  [2, 'Css', false],
  [3, 'Javascript', true]
]

console.log('Array Tuple', arrayTuple)

//object
type userType = {
  name: string,
  salary: number,
  state: boolean,
  age?: number //optonal
}
//or use intereface as type
// interface userType {
//   name: string,
//   salary: number,
//   state: boolean
// }

const Users: userType = {
  name:'Mustafa',
  salary: 5000,
  state: true
}

console.log('Object', Users)


//function
function functionNumber(x: number, y: number): number {
  return x * y
}

console.log('Function', functionNumber(4, 5))

//function
function functionUnion(message: string | number): void {
  console.log(message)
}

functionUnion('Hello')
functionUnion(200)