// currency converter
// $AUD to $USD Formula:
// aud = usd * 1.5

// let usd = 1200;
// let aud = usd * 1.5;

// console.log(aud); // 1800

// let age = 16

// if(age > 18) {
//   console.log(`you are ${age} years old, you may enter the place`)
// }
// else if(age === 18) {
//   console.log("you just turned 18, welcome!")
// }
// else{
//   console.log(`you are ${age} years old, get out of here`)
// }

// Ternary operator (come in handy when you want to write something short)

// let isRaining = true;

// isRaining ? console.log("it is raining") : console.log("it is not raining");

// let loggedIn = true;
// let hasMembership = true;

// loggedIn && hasMembership ? console.log("show video") : console.log("dont show video");

// OR use short cut

// let strn = loggedIn && hasMembership ? "show video" : "dont show video";

// console.log(strn);

// loops
// follow DRY(DONT REPEAT YOURSELF)

// while loop
// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter = counter + 1;
// }
// console.log("while loop ended");

// for loop
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 15; ++i) {
//   if(i % 5 === 0){
//     console.log(`${1} - ASAP Frontend`)
//   }
//   else if (i % 2 === 0){
//     console.log(`${i} - Frontend`)
//   } else {
//     console.log(`${i} - ASAP`)
//   }
// }

// let str = "ASAP FRONTEND";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// Functions
// Declare function
// function greet(name, time) {
//   // console.log("Hello World");
//   console.log(`Hello, ${name}, it's ${time}`);
// }

// // call function
// greet("Fortune", "morning");

// function sum() {
//   return 10 + 10;
// }

// console.log(sum());

// function sum(num 1, num2) {
//   return num1 + num2;
// }

// console.log(sum(10, 20));

// function convertUsdToAud(usd) {
//   // return usd * 1.5;
//   // or
//   let aud = usd * 1.5;
//   return aud;
// }
// console.log(convertUsdToAud(1000));

// arrow function
// const convertUsdToAud = (usd) => {
//   return usd * 1.5;
// }

// console.log(convertUsdToAud(1000));

// arrays
// let arr = [20, 15, 10, 30];

// console.log(arr); //show all
// console.log(arr[0]); //show first
// console.log(arr[arr.length -1]); //show last item

// //array methods
// // mutating method
// arr.push("14");

// none mutating method
// let filteredArray = arr.filter((element) => {
//   console.log(element);
//   if (element <= 15) {
//     return true;
//   }
// });

// OR

// let filteredArray = Array.filter((element) => {
//   return element <=15
// })

// OR

// let filteredArray = arr.filter((element) => element <= 15);

// console.log(arr);
// console.log(filteredArray);

// let array = [18, 20, 16, 15, 21];

// let filteredArray = array.filter((element) =>
//   if (element < 18) {
//   return true;
//   }
// });

// let filteredArray = array.filter((element) => element < 18);

// console.log(filteredArray);

// filter array without using the .filter method
// let array = [18, 20, 16, 15, 21];
// let adultArray = []

// for (i = 0; i < array.length; ++i) {
//   if (array[i].length < 18) {
//     adultArray.push(array[i]);
//   }
// }

// console.log(adultArray);

// learning the .map method
// non mutating method. its not going to touch the original array, it will create its own array.
// let array = [18, 20, 16, 15, 21];

// let newArray = array.map((element) => {
//   console.log(element);
//   return null
// })

// console.log(newArray);

// OR
// let array = [18, 20, 16, 15, 21];

// let newArray = array.map((element) =>  "Hello Worl!");

// console.log(newArray);

// exercise
// let uss = [18, 20, 16, 15, 21];

// let aud = usd.map((element) => {
//   console.log(element);
//   return element * 1.5;
// });

// console.log(aud);

// OR

// let uss = [18, 20, 16, 15, 21];

// let aud = usd.map((element) => element * 1.5);

// console.log(aud);

// let usd = [1000, 2000, 3000, 4000, 5000];

// let aud = [];

// for (i = 0; i < usd.length; ++i) {
//   aud.push(usd[i] * 1.5);
// }

// console.log(aud);

// learning Objects

// let user = {
//   emal: "exaple@gmail.com",
//   password: "test1234",
//   name: "John Doe",
//   discord: "examplediscord",
//   subscription: "VIP+",
//   lessons: []
// }

// object array

// let user = [{
//   email: "exaple@gmail.com",
//   password: "test1234",
//   name: "John Doe",
//   discord: "examplediscord",
//   subscription: "VIP+",
//   lessons: []
// },

// console.log(user.email);
// cosole.log(user.email[0]);

// let users = [
//   {
//     email: "exaple@gmail.com",
//     password: "test1234",
//     name: "John Doe",
//     discord: "examplediscord",
//     subscription: "VIP+",
//     lessons: [1, 2, 3],
//   },
//   {
//     email: "fortune@gmail.com",
//     password: "test1234",
//     name: "Fortune Anosike",
//     discord: "fortunecodes",
//     subscription: "VIP+",
//     lessons: [1, 2, 3, 4, 5],
//   },
// ];

// //console.log(user[0].email);
// console.log(user[0].lessons.map(element => element * 3));

// function signUp(
//   email, password, name, discord, subscription,lessonsCompleted) {
//   let user = {
//     email: email,
//     password: password,
//     name: name,
//     discord: discord,
//     subscription: subscription,
//     lessonsCompleted: lessonsCompleted,
//   };
//   users.push(user);
// }

// OR 

// function signUp(user) {
//   users.push(user);
// }

// signUp({
//   email: "fortune22@gmail.com",
//   password: "test1234",
//   name: "Fortune22 Anosike",
//   discord: "fortunecodes22",
//   subscription: "VIP+",
//   lessonsCpmpleted: [1, 2, 3, 4, 5]
// });

// console.log(users);





// DOM(DOCUMENT OBJECT MODEL)

// method 1 (we'll be using it 90% because its faster and much more flexible and you can use it to target any element regardles of id or class)
// document.querySelector('#heading');

// method 2 (you can only use this when the element has an id)
// document.getElementById('heading');

// TO CHANGE CONTENT / FOR HTML
// document.querySelector('#header').innerHTML += "FRONTEND"

// TO CHANGE CONTENT / FOR CSS
// document.querySelector('header').style.backgroundColor = "red";

// document.querySelector('header').style.fontSize = "8px";

// document.querySelector('header').style.color = "black";

// function changeButtonToGreen() {
//     document.querySelector('#button1').style.backgroundColor = "green"
// }


// hoe to change class names/ toggle side bar
function toggleSideBar() {
  document.querySelector('body').classList.toggle("open")
}