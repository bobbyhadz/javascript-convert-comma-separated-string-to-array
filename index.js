// EXAMPLE 1 - Convert a comma-separated String to an Array in JavaScript

// 👇️ to array of strings

const str = 'bobby,hadz,com';

const arr = str.split(',');

// 👇️ [ 'bobby', 'hadz', 'com' ]
console.log(arr);

console.log(arr[0]); // 👉️ bobby
console.log(arr[1]); // 👉️ hadz

// // -----------------------------------------

// // 👇️ to array of numbers

// const str2 = '1,2,3,4,5,6';

// const arr2 = str2.split(',').map(Number);
// console.log(arr2); // 👉️ [ 1, 2, 3, 4, 5, 6 ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Handling a comma followed by a variable number of spaces

// const str = 'bobby,hadz,com';

// function commaSeparatedToArray(str) {
//   return str.split(/[ ,]+/);
// }

// // 👇️ [ 'bobby', 'hadz', 'com' ]
// console.log(commaSeparatedToArray('bobby,hadz,com'));

// // 👇️ [ 'bobby', 'hadz', 'com' ]
// console.log(commaSeparatedToArray('bobby,,hadz,,com'));

// // 👇️ [ 'bobby', 'hadz', 'com' ]
// console.log(commaSeparatedToArray('bobby, hadz, com'));

// // 👇️ [ 'bobby', 'hadz', 'com' ]
// console.log(commaSeparatedToArray('bobby,   hadz,   com'));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a comma-separated string to an Array of Numbers

// const str = '12,34,56,78,9';

// const arr = str.split(',').map(element => {
//   return Number(element);
// });

// // 👇️ [12, 34, 56, 78, 9]
// console.log(arr);
