/**********************************************
 * Two Fer
 * ==================================
 * Given a name, return a string with the message:
 *  One for X, one for me.
 *  Where X is the given name.
 * However, if the name is missing, return the string:
 *  One for you, one for me.
 ***********************************************/

<<<<<<< Updated upstream
function twoFer(name) {
  // CODE HERE
  if (name === null || name === undefined) {
    return "One for you, one for me."
  } 
  return `One for ${name}, one for me.`

=======
function twoFer(a) {
  if ( a == null || a == undefined ){
    return "One for you, one for me."
  } else {
    return `One for ${a}, one for me.`
  }
>>>>>>> Stashed changes
}
module.exports = twoFer;

console.log("XCCELERATE!")



//no need to input "else"?

// no need, as the if will not execute, and it will just continue to run whatever is below the if statement// got it!
