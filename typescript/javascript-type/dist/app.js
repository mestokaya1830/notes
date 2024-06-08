//primivite
var st = 'String Type';
var nm = 30;
var mixed = true;
console.log('String ', st);
console.log('Number ', nm);
console.log('Mixed ', mixed);
//array
var arrayString = ['Html', 'Css', 'Javasript'];
var arrayNumber = [1, 2, 3];
var arrayMixed = ['Hello', 30, true];
console.log('Array String ', arrayString);
console.log('Array Number ', arrayNumber);
console.log('Array Mixed ', arrayMixed);
//object
var users = {
    name: 'Mesto',
    password: '9090',
    age: 30,
    state: true
};
console.log('Object', users);
var users2 = {
    name: 'Mesto',
    password: '9090',
    age: 30,
    state: true
};
console.log('Object With Interface', users2);
//function
var getUsers = function (name, age) {
    console.log('Function ', name + ' ' + age);
};
getUsers('Mesto', 34);
