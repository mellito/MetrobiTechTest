//  Write a javascript function that finds the duplicate items in any given array.

function findDuplicates(arr) {
  // this is 1 aproach to solve the problem of finding if the brackets are opened and closed properly using for and let variable
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr.indexOf(arr[i]) !== i && result.indexOf(arr[i]) === -1) {
  //     result.push(arr[i]);
  //   }
  // }
  // return result;

  //optimized solution
  //this aproach with filter method to filter the duplicates and return the result array without duplicates
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(
  findDuplicates([
    "hola",
    5,
    5,
    10,
    15,
    35,
    35,
    11,
    20,
    "hola",
    true,
    true,
    false,
    false,
  ]),
);
