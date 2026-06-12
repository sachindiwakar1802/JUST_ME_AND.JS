// functions in js 
// most importat function in js 
 
// console.log("sachiin");
// console.log("sachiin");
// console.log("sachiin");
// console.log("sachiin"); 
// console.log("sachiin"); 
// console.log("sachiin");

// function sayMyName(){
//   console.log("sachiin");
//   console.log("sachiin");
//   console.log("sachiin");
//   console.log("sachiin"); 
//   console.log("sachiin"); 
//   console.log("sachiin");
// }
// sayMyName()

// // simple function creation in js 
// function addtwonums(a,b){
//   return a+b;
// }

// console.log(addtwonums(2.4,4))

// function loginuser(username){
// return `${username} just logged in `
// }

// how to pass the obj in the function and its use in the function 
const user = {
  username : "hitesh",
  price :199,
}
function handleobject (anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user);
handleobject({
  username: "sam",
  price: 399
})

// closers that combine the  