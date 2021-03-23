/**********************************************
 * Reverse String
 * ==================================
 * Reverse a string

For example: input: "cool" output: "looc"
 ***********************************************/
function reverseString(word) {
  // CODE HERE
  return word.split('').reverse().join('');
}
module.exports = {
  reverseString
};