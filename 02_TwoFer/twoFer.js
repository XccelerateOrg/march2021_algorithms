/**********************************************
 * Two Fer
 * ==================================
 * Given a name, return a string with the message:
 *  One for X, one for me.
 *  Where X is the given name.
 * However, if the name is missing, return the string:
 *  One for you, one for me.
 ***********************************************/

 function twoFer(name) {
  if (name === undefined) {
  return "One for you, one for me.";
} else {
   return `One for ${name}, one for me.`;
}
 }



module.exports = twoFer;
