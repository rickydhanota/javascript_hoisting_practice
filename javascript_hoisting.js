// GIVEN
var example = "I'm the example!";
console.log(example);

//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//problem 2
function test(){
    var needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
test();

//problem 3
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

//problem 4

function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
var food = 'chicken';
eat();
console.log(food);
