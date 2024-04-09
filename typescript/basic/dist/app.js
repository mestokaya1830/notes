//basic
var fullName = 'Mustafa Kaya';
var union = 10;
console.log('Basic String', fullName);
console.log('Basic Union', union);
//tuple (order is importent)
var tuple = [1, 'Html', true];
console.log('Tuple', tuple);
//array
var langs = ['Html', 'Css', 'Javascript'];
var arrayUnion = ['Html', 'Css', 'Javascript', 1, 2, 3, true];
console.log('Array String', langs);
console.log('Array Union', arrayUnion);
//array tuple (order is importent)
var arrayTuple = [
    [1, 'Html', true],
    [2, 'Css', false],
    [3, 'Javascript', true]
];
console.log('Array Tuple', arrayTuple);
//or use intereface as type
// interface userType {
//   name: string,
//   salary: number,
//   state: boolean
// }
var Users = {
    name: 'Mustafa',
    salary: 5000,
    state: true
};
console.log('Object', Users);
//function
function functionNumber(x, y) {
    return x * y;
}
console.log('Function', functionNumber(4, 5));
//function
function functionUnion(message) {
    console.log(message);
}
functionUnion('Hello');
functionUnion(200);
