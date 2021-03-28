/**********************************************
 * Reverse String
 * ==================================
 * Reverse a string

For example: input: "cool" output: "looc"
 ***********************************************/
function reverseString(word) {
  // CODE HERE
  let newString = "";
  for (let i = word.length - 1 ; i >= 0 ; i -- ) {
    newString = newString + word[i]
  }
  return newString
}

module.exports = { reverseString };
