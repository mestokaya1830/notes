"use strict";
//Primitive Types
const str = 'String';
const age = 46;
const mixed = 'Mixed -> String or Number';
console.log('Primitive Types = ', str, age, mixed);
//array
const strArray = ['Html', 'Css', 'Javascript'];
const numArray = [1, 2, 3];
const mixedArray = ['String', 200, true];
console.log('Array Types', strArray, numArray, mixedArray);
//object
const objectUsers = [
    { id: 0, name: 'Mustafa', state: false },
    { id: 1, name: 'Deniz', state: true },
    { id: 2, name: 'Hakim', state: false }
];
console.log('Object', objectUsers);
//function
const getUsers = (param) => {
    console.log('Function', param);
};
getUsers(objectUsers);
const interfaceUsers = [
    { id: 0, name: 'Mustafa', state: false },
    { id: 1, name: 'Deniz', state: true },
    { id: 2, name: 'Hakim', state: false }
];
console.log('Interface', interfaceUsers);
//dom
const userInput = document.getElementById('username');
const btn = document.getElementById('btn');
const selectGender = document.getElementById('gender');
btn.addEventListener('click', () => {
    alert(userInput.value);
});
selectGender.addEventListener('change', () => {
    alert(selectGender.value);
});
