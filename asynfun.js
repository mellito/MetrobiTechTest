/* Write an async javascript function that writes every item in any given array with 1, 2,
4, 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
seconds, “c” is printed in 4 seconds, .
*/

function printItems(arr) {
  //    async solution
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`${arr[i]} in ${i + 1} seconds`);
    }, i + 1 * 1000);
  }
}

printItems(["a", "b", "c", "d, f"]);
