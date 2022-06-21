//  Write a javascript function that finds the duplicate items in any given array.

function findDuplicates(arr) {
  const duplicate = arr.filter((item, _, originalArray) => {
    const findDuplicate = originalArray.filter((value) => value === item);
    return findDuplicate.length > 1 && findDuplicate;
  });
  return Array.from(new Set(duplicate));
}

console.log(
  findDuplicates([
    "hola",
    5,
    5,
    5,
    5,
    5,
    10,
    10,
    10,
    15,

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
