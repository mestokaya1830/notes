//primivite
const st: string = 'String Type'
const nm: number = 30
const mixed: (string | number | boolean) = true

console.log('String ', st)
console.log('Number ', nm)
console.log('Mixed ', mixed)


//array
const arrayString: string[] = ['Html','Css','Javasript']
const arrayNumber: number[] = [1,2,3]
const arrayMixed: (string | number | boolean) [] = ['Hello', 30, true]

console.log('Array String ', arrayString)
console.log('Array Number ', arrayNumber)
console.log('Array Mixed ', arrayMixed)


//object
const users: Object = {
  name: 'Mesto',
  password: '9090',
  age: 30,
  state: true
}
console.log('Object', users)


//object with interface
interface userType {
  name: string;
  password: string;
  age: number;
  state: boolean
}

const users2: userType = {
  name: 'Mesto',
  password: '9090',
  age: 30,
  state: true
}
console.log('Object With Interface', users2)


//function
const getUsers = (name: string, age: number) => {
  console.log('Function ', name +' '+ age)
}

getUsers('Mesto', 34)
