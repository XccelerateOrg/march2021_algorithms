/**********************************************
 * Capitalize
 * ==================================
 * Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
 ***********************************************/

// function capitalize(str) {
//   // CODE HERE
//   var smallLetter = "coding is enjoyable but hard";
//   console.log(smallLetter);
//   var bigLetter = smallLetter.split(" ");

//   for (let i = 0; i < bigLetter.length; i++) {
//     bigLetter[i] = bigLetter[i][0].toUpperCase() + bigLetter[i].substr(1);
//    }

//    bigLetter.join(" ");


     //  console.log(capitalize(str));

// }
// function capitalize(str) {
//   // CODE HERE
//   var smallLetter = "coding is enjoyable but hard";
//   var bigLetter = smallLetter.split(" ");
//   bigLetter.map((word) => {
//   return word[0].toUpperCase() + word.subString(1);
// }).join(" ");
// bigLetter.join(" ");

function capitalize(smallLetter) {

var bigLetter = smallLetter.split(" ");
for (let i = 0; i < bigLetter.length; i++) {
  bigLetter[i] = bigLetter[i][0].toUpperCase() + bigLetter[i].substr(1);
}

return bigLetter.join(" ");

}

console.log(capitalize("i love breakfast at bill miller bbq"));
