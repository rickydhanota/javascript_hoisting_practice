// GIVEN
var example = "I'm the example!";
console.log(example);

//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

function test(){
    var needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
test();
