/**********************************************
 * Capitalize
 * ==================================
 * Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
 ***********************************************/

function capitalize(str) {
  lowStr = str.toLowerCase();
  let array = lowStr.split(" "); 
  for (let  i = 0 ; i < array.length ; i ++ ){
    array[i] = array[i][0].toUpperCase() + array[i].substring(1);
    
  }
  return array.join(" ")
}

module.exports = { capitalize };
