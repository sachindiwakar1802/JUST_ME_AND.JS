const prompt = require("prompt-sync")();

// synchronous programming code
let a = prompt("what is your age: ");
let b = prompt("enter your name: ");
let c = prompt("favorite color: ");

console.log(a + " year old " + b + " likes " + c);

// asynchronous programing 
setTimeout(function(){
  console.log("Hey I am good");
},3000)
