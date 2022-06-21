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
      if (
        brackets.indexOf(arrayStr[0]) !== -1 &&
        brackets[brackets.indexOf(arrayStr[0]) + 1] === arrayStr[1]
      ) {
        arrayStr.splice(0, 2);
      } else {
        const last = arrayStr.pop();
        const first = arrayStr.shift();
        if (brackets.indexOf(last) - 1 !== brackets.indexOf(first)) {
          return false;
        }
      }
    }

    return true;
  }
  return false;
}

console.log(stringBrackets("(())"));

//this is my aproach to solve the problem but it not efficient need improvement on my thinking i am working on in, google it the solution

function areBracketsBalanced(expr) {
  let stack = [];
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];
    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) return false;
    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        console.log(check);
        if (check == "{" || check == "[") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length == 0;
}
let expr = "[()](())";
console.log(areBracketsBalanced(expr));

// this aproach is clever and efficient i understand what is happening in the code
// he create a array variable to store the openbreakers and when is not a open bracket, with a switch statement, consult if is
// the corresponding closing bracket if not return false and using  the method pop take out the last element of the array
