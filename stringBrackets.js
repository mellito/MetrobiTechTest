/*
Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false
*/

//this is my aproach to solve the problem of finding if the brackets are opened and closed properly
// use method pop() to remove the last element of the array
// use method shift() to remove the first element of the array
// use method indexOf() to find the index of the element inside of the brackets array and compare it to the index of the closing bracket
// if the index of the closing bracket is not the same as the index of the opening bracket, return false
// if the brackets are closed properly, return true
// also to validate the input string, if the length of the input string is not even, return false to optimize the process

function stringBrackets(str) {
  const brackets = ["{", "}", "(", ")", "[", "]"];
  const arrayStr = str.split("");
  if (arrayStr.length % 2 === 0) {
    while (arrayStr.length > 0) {
      const last = arrayStr.pop();
      const first = arrayStr.shift();
      if (brackets.indexOf(last) - 1 !== brackets.indexOf(first)) {
        return false;
      }
    }

    return true;
  }
  return false;
}

console.log(stringBrackets("{((}))}"));
