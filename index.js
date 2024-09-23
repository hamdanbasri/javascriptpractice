// First javascript file
console.log('Whatsup everyone');

let person = {
    personname: 'Hamdan',
    age: 30
};

// Dot notation
person.name = 'Basri';

// Bracket notation
let selection = 'name';
person[selection] = 'Hada';
console.log(person.name);

// Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
selectedColors[2] = 'green';
console.log(selectedColors[1]);

function greet(somebody, ageperhaps) {
    console.log('Hello ' + somebody + ' ' + 'You are ' + ageperhaps + ' years old');
}

greet('Mad', 30);
greet('Mike', 31);

// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));