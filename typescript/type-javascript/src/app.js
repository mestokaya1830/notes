//primitive----------------------------------------------------
var str = 'String Type';
var num = 200;
var mixed = 'Mixed';
console.log('String = ', str);
console.log('Number = ', num);
console.log('Mixed = ', mixed);
//array-------------------------------------------------------
var arrayString = ['Html', 'Css', 'Javascript'];
var arrayNumber = [1, 2, 3];
var arrayMixed = ['Html', 100, true];
console.log('arrayString = ', arrayString);
console.log('arrayNumber = ', arrayNumber);
console.log('arrayMixed = ', arrayMixed);
var users = [
    { id: 1, name: 'Mesto', salary: 3000, state: true },
    { id: 2, name: 'Deniz', salary: 2000, state: false },
    { id: 3, name: 'FAruk', salary: 4000, state: true }
];
console.log('Object', users);
//functions------------------------------------------------
var test = function (name, age) {
    console.log('Function = ', name + ' ' + age);
};
test('Mesto', 48);
